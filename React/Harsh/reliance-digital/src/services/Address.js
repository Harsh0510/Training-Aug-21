import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./AuthServices";

const apiUrl = "address";

const GetAddress = async () => {
  return await axiosInstance().get(apiUrl);
};

const CreateAddress = async (address) => {
  return await axiosInstance().post(apiUrl, address);
};
const UpdateAddress = async (id, values) => {
  return await axiosInstance().put(apiUrl + `/${id}`, values);
};

const DeleteAddress = async (id) => {
  return await axiosInstance().delete(apiUrl + `/${id}`);
};
export { GetAddress, CreateAddress, UpdateAddress, DeleteAddress };
