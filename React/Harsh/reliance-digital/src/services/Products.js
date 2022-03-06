import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "products";

const GetProducts = async () => {
  return await axiosInstance().get(apiUrl);
};
const GetProductById = async (id) => {
  return await axiosInstance().get(apiUrl + `/${id}`);
};
const PostProducts = async (products) => {
  return await axiosInstance().post(apiUrl, products);
};
const UpdateProducts = async (id, products) => {
  return await axiosInstance().put(apiUrl + `/${id}`, products);
};
const DeleteProducts = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};

export {
  GetProducts,
  GetProductById,
  PostProducts,
  UpdateProducts,
  DeleteProducts,
};
