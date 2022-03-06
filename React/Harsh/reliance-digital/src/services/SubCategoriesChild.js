import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "subcategorychild";

const GetSubCategoriesChild = async () => {
  return await axiosInstance().get(apiUrl);
};
const GetSubCategoriesChildById = async (id) => {
  return await axiosInstance().get(apiUrl + `/${id}`);
};

const PostSubCategoriesChild = async (subcategorieschild) => {
  return await axiosInstance().post(apiUrl, subcategorieschild);
};
const UpdateSubCategoriesChild = async (id, subcategorieschild) => {
  return await axiosInstance().put(apiUrl + `/${id}`, subcategorieschild);
};
const DeleteSubCategoriesChild = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};

export {
  GetSubCategoriesChild,
  PostSubCategoriesChild,
  UpdateSubCategoriesChild,
  DeleteSubCategoriesChild,
  GetSubCategoriesChildById,
};
