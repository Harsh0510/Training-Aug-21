import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "subCategory";

const GetSubCategories = async () => {
  return await axiosInstance().get(apiUrl);
};
const GetSubCategoryById = async (id) => {
  return await axiosInstance().get(apiUrl + `/${id}`);
};
const PostSubCategories = async (subcategories) => {
  return await axiosInstance().post(apiUrl, subcategories);
};
const UpdateSubCategories = async (id, subcategories) => {
  return await axiosInstance().put(apiUrl + `/${id}`, subcategories);
};
const DeleteSubCategories = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};

export {
  GetSubCategories,
  GetSubCategoryById,
  PostSubCategories,
  UpdateSubCategories,
  DeleteSubCategories,
};
