const OrderDetailModel = require("../models/orderDetail.model");
const OrderItemModel = require("../models/order.items.model");
const CartModel = require("../models/cart.item.model");
const ProductModel = require("../models/product.model");
const AddressModel = require("../models/address.model");
const {
  validateOrderItem,
  validateOrderDetail,
} = require("../utils/joi.validation");

const PaymentModel = require("../models/payment.model");
const crypto = require("crypto");
const RazorPay = require("razorpay");

const instance = new RazorPay({
  key_id: "rzp_test_AItSw78ZSdv6F1",
  key_secret: "Yd5P43eXaLmbK0DXWZFyDJTV",
});

class OrderDomain {
  //  create Order
  async createOrder(req, res) {
    try {
      //   const { error } = validateOrder(data);
      //   if (error) {
      //     return res.status(400).json({ message: error.details[0].message });
      //   }

      let data = req.body;
      let userId = req.decoded._id;
      let address = await AddressModel.findOne({ user: userId });
      let cart = await CartModel.find({ user: userId });
      let i = cart.map((item) => item.price);
      let total = i.reduce((accum, curr) => accum + curr, 0);
      data = { ...data, user: userId, total: total, address: address._id };

      //   save order details

      const orderDetail = new OrderDetailModel(data);
      let result = await orderDetail.save();
      var arr = [];
      var oItem = [];
      //   save order item
      for (var item of cart) {
        const product = await ProductModel.findById(item.products);
        let order = new OrderItemModel({
          order: result._id,
          products: item.products,
          price: product.price,
          discount: product.discount,
        });
        var orderItem = await order.save();
        oItem.push(orderItem);
      }
      let oDetail = JSON.parse(JSON.stringify(result));
      oDetail.orderItem = oItem;
      // arr.push(oDetail);
      // * RAZORPAY START :: Initialize payment
      const options = {
        amount: result.total * 100, // convert rupees to paisa
        currency: "INR",
      };
      const razorpayOrder = await instance.orders.create(options);
      console.log(razorpayOrder);
      oDetail.razorpayOrder = razorpayOrder;
      arr.push(oDetail);
      // const deleteCart = await CartModel.deleteMany({ cart });
      if (arr) {
        res.send(arr);
      } else {
        res.status(400).json({ message: "Please try again later" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // create payment
  async razorpayVerifyPayment(req, res) {
    try {
      const userId = req.decoded._id;
      let data = req.body;
      const signature = crypto.createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      );
      signature.update(`${data.razorpayOrderId}|${data.transactionId}`);
      const digest = signature.digest("hex");
      if (digest !== data.razorpaySignature) {
        console.log("Signature verification failed");
        return res.status(400).json({
          message: "Transaction not legit!",
        });
      }
      const fetchResponse = await instance.payments.fetch(data.transactionId);
      // * SAVE PAYMENT DETAILS *
      const { currency, ...filteredData } = data;
      console.log(filteredData);
      data = {
        ...filteredData,
        method: fetchResponse.method,
        status: true,
      };
      console.log(data);
      const paymentData = new PaymentModel(data);
      const payment = await paymentData.save();
      console.log(payment);
      if (payment) {
        const cart = await CartModel.find({ user: userId });
        // console.log(cart);
        const deletedCart = await CartModel.deleteMany({ cart });
        const updateOrderStatus = await OrderDetailModel.findOneAndUpdate(
          { _id: payment.orderId, isActive: 1 },
          { $set: { isCompleted: true } },
          { new: 1, runValidators: true }
        );
        console.log(updateOrderStatus);
        if (deletedCart && updateOrderStatus) {
          res.send(payment);
        }
      } else {
        res.status(400).json({
          message: "Please try again later!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // get all Orders
  async getAllOrders(req, res) {
    try {
      const orderDetail = await OrderDetailModel.find();
      const arr = [];
      for (var item of orderDetail) {
        const oItem = await OrderItemModel.find({ order: item._id });
        let i = JSON.parse(JSON.stringify(item));
        i.orderItem = oItem;
        arr.push(i);
      }
      if (arr) {
        res.send(arr);
      } else {
        res.status(401).json({ message: "Orders not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //get Order
  async getOrder(req, res) {
    try {
      const _id = req.params.id;
      const result = await OrderDetailModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Order not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // delete Order
  async deleteOrder(req, res) {
    try {
      const _id = req.params.id;
      const result = await OrderDetailModel.findByIdAndDelete({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Order not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = OrderDomain;
