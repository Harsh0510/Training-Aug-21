import React from "react";
import "./Signup.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { createAccount } from "../../../services/AccountService";
import { userLogin } from "../../../services/AccountService";
import { useAuthContext } from "../../../Context/AuthContext";
import { setToken } from "../../../utils/LocalStorage";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
export default function Signup() {
  const navigate = useNavigate();
  const { setUserToken } = useAuthContext();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("FirstName is required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("LastName is required"),
    emailAddress: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters")
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
        "Password must be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("Confirm password is required"),
    mobileNumber: Yup.string()
      .required("MobileNumber is required")
      .matches(/^[6-9]{1}[0-9]{9}$/, "MobileNumber must be valid"),
  });
  return (
    <>
      <Navbar />
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
            mobileNumber: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            try {
              const { confirmPassword, ...data } = values;
              const user = await createAccount(data);
              console.log(user);
              const { emailAddress, password } = values;
              const loginUser = await userLogin({ emailAddress, password });
              setToken(loginUser.data.token);
              setUserToken(loginUser.data.token);
              navigate("/");
            } catch (e) {
              console.log(e, e.message, e.response);
            }
          }}
        >
          {(formik) => {
            return (
              <div className="register">
                <h5>Register</h5>
                <Form>
                  <TextField
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                  />
                  <TextField
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                  />
                  <TextField
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address*"
                  />
                  <TextField
                    type="password"
                    name="password"
                    placeholder="Password*"
                  />
                  <TextField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password*"
                  />
                  <TextField
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number*"
                  />
                  <button type="submit" className="btn btn-danger shadow-none">
                    REGISTER
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
      <Footer />
    </>
  );
}
