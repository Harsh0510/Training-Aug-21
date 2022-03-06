import axios from "axios";
import axiosInstance from "./AuthServices";

const API_URL = `users`;
const BASE_URL = process.env.REACT_APP_API_BASE_URL + API_URL;

const createAccount = async (user) => {
  return await axios.post(BASE_URL, user);
};

const userLogin = async (user) => {
  return await axios.post(BASE_URL + `/login`, user);
};

const getCurrentUser = async () => {
  return await axiosInstance().get(API_URL + "/currentUser");
};

export { createAccount, userLogin, getCurrentUser };
