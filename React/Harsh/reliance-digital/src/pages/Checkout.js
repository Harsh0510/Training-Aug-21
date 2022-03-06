import React from "react";
import Addr from "../component/forms/Address/Address";
import Navbar from "../component/Navbar/Navbar";
import CheckOut from "../component/Checkout/Checkout";
import Footer from "../component/Footer/Footer";
export default function Checkout() {
  return (
    <>
      <Navbar />
      <CheckOut />
      <Footer />
    </>
  );
}
