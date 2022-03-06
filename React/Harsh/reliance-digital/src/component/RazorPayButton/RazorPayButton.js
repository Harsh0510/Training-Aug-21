import Logo from "../../images/logo.png";
import { useOrderContext } from "../../Context/OrderContext";
import { useNavigate } from "react-router-dom";

const RazorpayButton = ({ razorpayValues }) => {
  const { fnCreateUserOrder, fnCreateUserPayment } = useOrderContext();
  const { userEmail, primaryPhone } = razorpayValues;
  const navigate = useNavigate();

  const openPayModal = async () => {
    try {
      // *********** creating new order ***********
      const result = await fnCreateUserOrder();
      if (!result) {
        alert("Server error. Are you online?");
        return;
      }
      let { _id } = result[0];
      //   console.log(result);
      let { amount, id: order_id, currency } = result[0].razorpayOrder;
      // *********** RAZORPAY OPTIONS ***********
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: amount.toString(),
        currency,
        name: "Reliance",
        description: "Reliance Payment",
        image: { Logo },
        order_id,
        handler: async function (response) {
          console.log(response);
          amount /= 100;
          const data = {
            transactionId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            orderId: _id,
            amount,
            currency,
          };
          // *********** CREATING NEW PAYMENT ***********
          const result = await fnCreateUserPayment(data);
          console.log(result);
          navigate("/");
          alert("Payment Successful");
        },
        prefill: {
          contact: primaryPhone,
          email: userEmail,
        },
        notes: {
          address: "some address",
        },
        theme: {
          color: "#00a4a6",
        },
      };
      // *********** razorpay model ***********
      var rz = new window.Razorpay(options);
      rz.open();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className="btn btn-danger w-25 fw-bold position-relative start-50 translate-middle"
      onClick={openPayModal}
    >
      Pay
    </button>
  );
};

export default RazorpayButton;
