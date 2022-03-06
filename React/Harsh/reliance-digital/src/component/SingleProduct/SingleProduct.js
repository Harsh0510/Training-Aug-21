import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../Context/ProductContext";
import "./SingleProduct.css";
import img from "../../images/img/1.jpg";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
export default function SingleProduct() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const a = useContext(ProductContext);
  const { products } = a;
  const sp = products.filter((item) => item._id === parseInt(slug));

  const { cart, fnCreateCart, fnUpdateCart } = useCartContext();

  const cartId = cart.map((item) => item.products._id);

  const createCart = (products) => {
    const productData = { products, quantity: 1 };
    fnCreateCart(productData);
    navigate("/cart");
  };

  const updateCart = (id) => {
    const cartProducts = cart.find((item) => item.products._id == id);
    const productData = { quantity: cartProducts.quantity + 1 };
    fnUpdateCart(cartProducts._id, productData);
    navigate("/cart");
  };
  // useEffect(() => {
  //   UpdateCart(10, { quantity: 2 });
  // }, []);
  return (
    <>
      {sp.map((item) => {
        return (
          <>
            <div className="singleproduct my-5">
              <div className="left">
                <div className="main-image">
                  <img src={item.image} />
                </div>
                {/* <div className="images">
                  <img src={img} />
                  <img src={img} />
                  <img src={img} />
                </div> */}
              </div>
              <div className="right">
                <h2>{item.productName}</h2>
                <div className="information">
                  <div className="details">
                    <h4>Key Feature</h4>
                    <ul className="description">
                      {item.description.map((i) => {
                        return (
                          <>
                            <li>{i}</li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="info">
                    <h4>Info</h4>
                    <p>
                      Deal Price:
                      <span className="dealprice">
                        &#x20B9;{item.offerprice}.00
                      </span>
                    </p>
                    <p>
                      MRP:<s>&#x20B9;{item.price}.00</s>(Inclusive of all taxes)
                    </p>
                    <p className="save">
                      You Save: {item.discount.percentage}%(&#x20B9;
                      {item.price - item.offerprice})
                    </p>
                    <p className="shipping">Free Shipping!</p>
                    <button
                      onClick={() => {
                        cartId.includes(item._id)
                          ? updateCart(item._id)
                          : createCart(item._id);
                      }}
                      // onClick={() => {
                      //   createCart(item._id);
                      // }}
                      // onClick={() => {
                      //   updateCart(item._id);
                      // }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
