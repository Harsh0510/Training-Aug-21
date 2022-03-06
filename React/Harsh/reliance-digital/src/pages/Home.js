import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import FeaturedProduct from "../component/FeaturedProducts/FeaturedProducts";
import Banner from "../component/Banner/Banner";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FeaturedProduct />
      <Footer />
    </>
  );
}
