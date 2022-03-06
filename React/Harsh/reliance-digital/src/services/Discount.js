import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "discount";

const GetDiscount = async () => {
  return await axiosInstance().get(apiUrl);
};
const PostDiscount = async (discount) => {
  return await axiosInstance().post(apiUrl, discount);
};
const Updatediscount = async (id, discount) => {
  return await axiosInstance().put(apiUrl + `/${id}`, discount);
};
const DeleteDiscount = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};

export { GetDiscount, PostDiscount, Updatediscount, DeleteDiscount };
