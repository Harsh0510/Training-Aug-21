import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "brands";

const GetBrands = async () => {
  return await axiosInstance().get(apiUrl);
};
const PostBrand = async (brand) => {
  return await axiosInstance().post(apiUrl, brand);
};
const UpdateBrand = async (id, brand) => {
  return await axiosInstance().put(apiUrl + `/${id}`, brand);
};
const DeleteBrand = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};

export { GetBrands, PostBrand, UpdateBrand, DeleteBrand };
