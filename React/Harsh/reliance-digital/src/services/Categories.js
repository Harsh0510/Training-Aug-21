import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "category";

const GetCategories = async () => {
  return await axiosInstance().get(apiUrl);
};
const GetCategoryById = async (id) => {
  return await axiosInstance().get(apiUrl + `/${id}`);
};
const PostCategories = async (categories) => {
  return await axiosInstance().post(apiUrl, categories);
};
const UpdateCategories = async (id, categories) => {
  return await axiosInstance().put(apiUrl + `/${id}`, categories);
};
const DeleteCategories = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};

export {
  GetCategories,
  GetCategoryById,
  PostCategories,
  UpdateCategories,
  DeleteCategories,
};
