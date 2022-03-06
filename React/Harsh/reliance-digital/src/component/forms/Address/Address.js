import React, { useState, useEffect } from "react";
import "./Address.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { CreateAddress } from "../../../services/Address";
import { GetAddress } from "../../../services/Address";
import { UpdateAddress } from "../../../services/Address";
import { getCurrentUser } from "../../../services/AccountService";
import { Link } from "react-router-dom";
// import { setToken } from "../../../utils/LocalStorage";

export default function Address() {
  // set address
  const [address, setAddress] = useState([]);
  const addr = async () => {
    const add = await GetAddress();
    setAddress(add.data);
  };

  useEffect(() => {
    addr();
  }, []);

  // set currentUser
  const [currentUser, setCurrentUser] = useState({});
  const user = async () => {
    const currentuser = await getCurrentUser();
    setCurrentUser(currentuser.data);
  };

  useEffect(() => {
    user();
  }, []);

  // currentUser address

  const currentUserAddress = address.filter(
    (item) => item.user === currentUser._id
  );

  // const { user: userId, __v, _id, ...addressData } = currentUserAddress[0];
  // console.log(currentUserAddress);
  // create address
  const createAddress = async (id) => {
    const address = await CreateAddress(id);
  };
  // update address
  const updateAddress = async (id, values) => {
    const address = await UpdateAddress(id, values);
    // if (cart) {
    //   navigate("/cart");
    // }
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string()
      .matches(/^[6-9]{1}[0-9]{9}$/, "MobileNumber must be valid")
      .required("Phone Number is required"),
    pincode: Yup.string().required("Pincode is required"),
    houseNo: Yup.string().required("HouseNo is required"),
    street: Yup.string().required("Street is required"),
    landmark: Yup.string().required("Landmark is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
  });
  return (
    <>
      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="fs-5">Address Information</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {currentUserAddress.length !== 0 ? (
                <>
                  {currentUserAddress.map((item) => {
                    return (
                      <>
                        <div className="my-5">
                          <h2 className="fs-25">Delivery Address</h2>
                          <p>
                            Name: {item.name} , Phone Number: {item.phoneNumber}
                          </p>
                          <p>
                            {item.houseNo},{item.street},{item.landmark}
                          </p>
                          <p>
                            {item.city},{item.stare},{item.pincode}
                          </p>
                          <span></span>
                        </div>
                      </>
                    );
                  })}

                  <button
                    type="button"
                    className="btn btn-primary shadow-none"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                  >
                    Edit Address
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-primary shadow-none"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal"
                  >
                    Enter Address
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="Modal">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter Shipping Address
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <Formik
                  initialValues={{
                    name: "",
                    phoneNumber: "",
                    pincode: "",
                    houseNo: "",
                    street: "",
                    landmark: "",
                    city: "",
                    state: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                    try {
                      {
                        // currentUserAddress.length !== 0
                        //   ? await UpdateAddress(
                        //       currentUserAddress[0]._id,
                        //       values
                        //     )
                        //   : await CreateAddress(values);

                        currentUserAddress.length !== 0
                          ? updateAddress(currentUserAddress[0]._id, values)
                          : createAddress(values);
                      }
                    } catch (e) {
                      // console.log(address);
                      console.log(e, e.message, e.response);
                    }
                  }}
                >
                  {(formik) => {
                    return (
                      <div>
                        <Form>
                          <TextField
                            type="text"
                            name="name"
                            placeholder="Name*"
                          />
                          <TextField
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number*"
                          />
                          <TextField
                            type="text"
                            name="pincode"
                            placeholder="Pincode*"
                          />
                          <TextField
                            type="text"
                            name="houseNo"
                            placeholder="House No*"
                          />
                          <TextField
                            type="text"
                            name="street"
                            placeholder="Street*"
                          />
                          <TextField
                            type="text"
                            name="landmark"
                            placeholder="Landmark*"
                          />
                          <TextField
                            type="text"
                            name="city"
                            placeholder="City*"
                          />
                          <TextField
                            type="text"
                            name="state"
                            placeholder="State*"
                          />
                          <button
                            type="submit"
                            className="btn btn-danger shadow-none"
                          >
                            SUBMIT
                          </button>
                        </Form>
                      </div>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
