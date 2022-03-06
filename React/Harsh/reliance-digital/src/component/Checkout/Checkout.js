import React from "react";
import { useEffect, useState } from "react";
import "./Checkout.css";
import Address from "../forms/Address/Address";
// import { GetCart } from "../../services/Cart";
import { useCartContext } from "../../Context/CartContext";
import RazorpayButton from "../RazorPayButton/RazorPayButton";
import { useAuthContext } from "../../Context/AuthContext";

export default function Checkout() {
  const { cart, totalItems } = useCartContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const razorpayValues = {
    userEmail: user.emailAddress,
    primaryPhone: user.mobileNumber,
  };

  // sum of price
  var sum = cart.reduce((sum, value) => {
    return sum + value.price;
  }, 0);
  return (
    <>
      <Address />
      <h3 className="my-3">
        Order Summary{" "}
        <span className="text-muted">({cart.length} Products)</span>
      </h3>
      <div className="order">
        <div className="orderItems">
          {cart.map((item) => {
            return (
              <>
                <div className="orderItem mb-5">
                  <img src={item.products.image} alt="product" />
                  <div className="pt-4 w-25 me-5">
                    <p>{item.products.productName}</p>
                  </div>
                  <div className="pt-4 me-2">
                    <p className="fw-bold">{item.products.offerprice}</p>
                    <p className="text-muted">
                      M.R.P.:<s>{item.products.price}</s> inclusive of all taxes
                    </p>
                    <p className="text-muted">
                      you save:{item.products.discount.percentage}%(
                      {item.products.price - item.products.offerprice})
                    </p>
                    <p className="text-muted">free shipping</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="orderInformation">
          <h6 className="ms-3">PRICE DETAILS</h6>
          <div className="orderPrice">
            <p>Price({totalItems()} items)</p>
            <p>{sum}</p>
          </div>
          <div className="deliverycharge">
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <hr className="line" />
          <div className="amount">
            <h6>AMOUNT PAYABLE</h6>
            <span>{sum}</span>
          </div>
        </div>
      </div>

      <RazorpayButton razorpayValues={razorpayValues} />
    </>
  );
}
