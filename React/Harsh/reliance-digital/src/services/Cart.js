import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "cartItem";

const GetCart = async () => {
  return await axiosInstance().get(apiUrl);
};

const PostCart = async (cart) => {
  return await axiosInstance().post(apiUrl, cart);
};
const UpdateCart = async (id, cart) => {
  return await axiosInstance().put(apiUrl + `/${id}`, cart);
};
const DeleteCart = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};

export { GetCart, PostCart, UpdateCart, DeleteCart };
