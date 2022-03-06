import { createContext, useContext, useState, useEffect } from "react";

import { createUserOrder, razorpayVerifyPayment } from "../services/Order";

// *********** context ***********

const OrderContext = createContext();
const useOrderContext = () => useContext(OrderContext);

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  // * get user order *
  const fnCreateUserOrder = async () => {
    try {
      const userOrder = await createUserOrder();

      return userOrder.data;
    } catch (err) {
      console.log(err.response.data.message || err.message);
    }
  };
  // * ctreate payment *
  const fnCreateUserPayment = async (data) => {
    try {
      const userPayment = await razorpayVerifyPayment(data);

      return userPayment.data;
    } catch (err) {
      console.log(err.response.data.message || err.message);
    }
  };
  const value = {
    fnCreateUserOrder,
    fnCreateUserPayment,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export { OrderProvider, useOrderContext };
