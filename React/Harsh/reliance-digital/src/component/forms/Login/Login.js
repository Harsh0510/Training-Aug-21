import React, { useState } from "react";
import "./Login.css";
import { Formik, Form } from "formik";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import * as Yup from "yup";
import TextField from "./TextField";
import google from "../../../images/google.PNG";
import facebook from "../../../images/facebook.PNG";
import { userLogin } from "../../../services/AccountService";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../../utils/LocalStorage";
import { useAuthContext } from "../../../Context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const validate = Yup.object({
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
  });
  const { setUserToken } = useAuthContext();
  // error
  const [formError, setFormError] = useState("");
  return (
    <>
      <Navbar />
      <div className="loginForm">
        <Formik
          initialValues={{
            emailAddress: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            try {
              const user = await userLogin(values);
              // set token in localStorage
              setToken(user.data.token);
              // set token in authContext state
              setUserToken(user.data.token);
              console.log(user);
              navigate("/");
            } catch (e) {
              console.log(e, e.message, e.response);
              setFormError(e.response.data.message);
            }
          }}
        >
          {(formik) => {
            return (
              <div className="login">
                <h5>Login</h5>
                <div className="form">
                  <Form>
                    {formError && (
                      <div
                        className="alert alert-danger alert-dismissible fade show errordisplay"
                        role="alert"
                      >
                        {formError}
                        <button
                          type="button"
                          className="btn-close errorbutton"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        ></button>
                      </div>
                    )}
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

                    <button
                      type="submit"
                      className="btn btn-danger shadow-none mb-3"
                    >
                      CONTINUE
                    </button>

                    <span>
                      Don't have an account yet?
                      <Link to="/register" className="text-danger fw-bold">
                        REGISTER
                      </Link>
                    </span>
                  </Form>
                  {/* <div className="center">
                  <div className="or">or</div>
                  <div className="line"></div>
                </div>
                <div className="right">
                  <h6>Login Using</h6>
                  <button className="my-3 btn border border-1 p-0 shadow-none">
                    <img src={google} alt="google" />
                  </button>
                  <button className="btn shadow-none">
                    <img src={facebook} alt="facebook" />
                  </button>
                </div> */}
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
      <Footer />
    </>
  );
}
