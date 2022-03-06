import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../Context/ProductContext";
import Fproducts from "./Fproducts";

export default function FeaturedProducts() {
  const a = useContext(ProductContext);
  const { featuredProducts } = a;

  return (
    <>
      <h4 className="ms-4 mb-4">
        FIRE-BOLTT NINJA PRO AT 2099 |{" "}
        <Link to="products/fp/3">
          <span className="fs-6">VIEW ALL</span>
        </Link>
      </h4>
      <Fproducts
        featuredProducts={featuredProducts}
        img="https://res.cloudinary.com/drv5pusqd/image/upload/v1644921901/reliance/featuredProducts/smartWatch_qtoa40.jpg"
        _id={3}
      ></Fproducts>
      <h4 className="ms-4 mb-4">
        IPHONE13 |{" "}
        <Link to="products/fp/1">
          <span className="fs-6">VIEW ALL</span>
        </Link>
      </h4>
      <Fproducts
        featuredProducts={featuredProducts}
        img="https://res.cloudinary.com/drv5pusqd/image/upload/v1644921901/reliance/featuredProducts/iPhone_nbps9c.jpg"
        _id={1}
      ></Fproducts>
      <h4 className="ms-4 mb-4">
        KODAK HD LED TVS |{" "}
        <Link to="products/fp/15">
          <span className="fs-6">VIEW ALL</span>
        </Link>
      </h4>
      <Fproducts
        featuredProducts={featuredProducts}
        img="https://res.cloudinary.com/drv5pusqd/image/upload/v1644921901/reliance/featuredProducts/television_e9oesi.jpg"
        _id={15}
      ></Fproducts>
    </>
  );
}
