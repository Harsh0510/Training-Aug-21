import axiosInstance from "./AuthServices";

const API_URL = `order`;

const getAllOrders = async () => {
  return await axiosInstance().get(API_URL);
};

const createUserOrder = async () => {
  return await axiosInstance().post(API_URL);
};

const razorpayVerifyPayment = async (data) => {
  return await axiosInstance().post(API_URL + `/payment`, data);
};

export { getAllOrders, createUserOrder, razorpayVerifyPayment };
