const ProductModel = require("../models/product.model");
const DiscountModel = require("../models/discount.model");
const { validateProduct } = require("../utils/joi.validation");
const uuid = require("uuid").v4;

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "drv5pusqd",
  api_key: "385354796957847",
  api_secret: "dlLSNagTw0_nr2sa_VTYShqlcYM",
});

class ProductDomain {
  // create product
  async createProduct(req, res) {
    try {
      let data = req.body;
      data = {
        ...data,
        description: JSON.parse(data.description),
      };
      const { error } = validateProduct(data);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      // const file = req.files.photo;
      // console.log(req.files);
      if (req.files) {
        // console.log(req.files);
        if (req.files.photo) {
          let image = await cloudinary.uploader.upload(
            req.files.photo.tempFilePath,
            {
              resource_type: "image",
              public_id: `reliance/products/${uuid()}-${req.files.photo.name}`,
            }
          );
          // console.log(image);
          if (image) {
            data.image = image.secure_url;
          } else {
            console.log("error");
          }
        }
      }
      if (data.discount) {
        var _id = data.discount;
        let dis = await DiscountModel.findById({ _id });
        var offerprice = (data.price * dis.percentage) / 100;
        offerprice = (data.price - offerprice).toFixed(0);
        data = { ...data, offerprice: offerprice };
        const product = new ProductModel(data);
        const result = await product.save();
        res.send(result);
      } else {
        const product = new ProductModel(data);
        const result = await product.save();
        res.send(result);
      }
    } catch (err) {
      console.log(err);
    }
  }
  // get all products
  async getAllProducts(req, res) {
    try {
      const result = await ProductModel.find()
        .populate("discount")
        .populate("brand")
        .populate("subcategorychild");
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "products not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  // get product
  async getProduct(req, res) {
    try {
      const _id = req.params.id;
      const result = await ProductModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "product not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // update product
  async updateProduct(req, res) {
    try {
      var data = req.body;
      const _id = req.params.id;
      const product = await ProductModel.findById({ _id });
      if (data.description) {
        data = {
          ...data,
          description: JSON.parse(data.description),
        };
      }
      if (req.files) {
        // console.log(req.files);
        if (req.files.photo) {
          let image = await cloudinary.uploader.upload(
            req.files.photo.tempFilePath,
            {
              resource_type: "image",
              public_id: `reliance/products/${uuid()}-${req.files.photo.name}`,
            }
          );
          // console.log(image);
          if (image) {
            data.image = image.secure_url;
          } else {
            console.log("error");
          }
        }
      }
      if (data.discount && data.price) {
        var __id = data.discount;
        let dis = await DiscountModel.findById({ _id: __id });
        var offerprice = (data.price * dis.percentage) / 100;
        offerprice = (data.price - offerprice).toFixed(0);
        data = { ...data, offerprice: offerprice };
      }
      if (data.discount) {
        var __id = data.discount;
        let dis = await DiscountModel.findById({ _id: __id });
        var offerprice = (product.price * dis.percentage) / 100;
        offerprice = (product.price - offerprice).toFixed(0);
        data = { ...data, offerprice: offerprice };
      }
      if (data.price) {
        var __id = product.discount;
        let dis = await DiscountModel.findById({ _id: __id });
        var offerprice = (data.price * dis.percentage) / 100;
        offerprice = (data.price - offerprice).toFixed(0);
        data = { ...data, offerprice: offerprice };
      }

      // const product = await ProductModel.findById({ _id });
      // if (product.discount || data.discount) {
      //   if (data.discount) {
      //     var __id = data.discount;
      //     let dis = await DiscountModel.findById({ _id: __id });
      //     var offerprice = (product.price * dis.percentage) / 100;
      //     offerprice = parseInt(product.price - offerprice);
      //     data = { ...data, offerprice: offerprice };
      //   } else {
      //     var __id = parseInt(product.discount);
      //     let dis = await DiscountModel.findById({ _id: __id });
      //     var offerprice = (data.price * dis.percentage) / 100;
      //     offerprice = parseInt(data.price - offerprice);
      //     data = { ...data, offerprice: offerprice };
      //   }
      //   var result = await ProductModel.findByIdAndUpdate(
      //     { _id },
      //     { $set: data },
      //     { new: 1 }
      //   );
      // }

      var result = await ProductModel.findByIdAndUpdate(
        { _id },
        { $set: data },
        { new: 1 }
      );

      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "product not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // delete product
  async deleteProduct(req, res) {
    try {
      const _id = req.params.id;
      const result = await ProductModel.findByIdAndDelete({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "product not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ProductDomain;
