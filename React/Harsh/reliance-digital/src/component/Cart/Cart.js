import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import img from "../../images/cart.PNG";
import { useCartContext } from "../../Context/CartContext";
export default function Cart() {
  const { cart, fnCreateCart, fnUpdateCart, fnDeleteCart, totalItems } =
    useCartContext();

  // update cart
  // increment
  const updateCartI = (id) => {
    const cartProducts = cart.find((item) => item.products._id == id);
    const productData = { quantity: cartProducts.quantity + 1 };
    fnUpdateCart(cartProducts._id, productData);
  };
  // decrement
  const updateCartD = async (id) => {
    const cartProducts = cart.find((item) => item.products._id == id);
    const productData = { quantity: cartProducts.quantity - 1 };
    fnUpdateCart(cartProducts._id, productData);
  };

  // sum of price
  var sum = cart.reduce((sum, value) => {
    return sum + value.price;
  }, 0);
  return (
    <>
      {cart.length == 0 ? (
        <>
          <div className="d-flex flex-column align-items-center my-5">
            <img src={img} alt="cart" className="mb-3" />
            <p className="fs-3">Your Shopping Cart is Empty </p>
            <Link to="/">
              <button className="btn btn-danger fw-bold shadow-none mt-3">
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="cart-parent my-5">
          <div className="cart-header mb-3">
            <div className="cart-text">
              <h4>
                My Cart
                <span className="text-muted">({cart.length} products)</span>
              </h4>
            </div>
            <div className="checkout">
              <Link to="/checkout">
                <button>
                  <span>CHECKOUT</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="cart-content">
            <div className="cart">
              {cart.map((item) => {
                return (
                  <>
                    <div className="cart-cart">
                      <div className="cart-item">
                        <div className="cart-image-button">
                          <img src={item.products.image} alt="product" />
                          <div className="cart-button">
                            {item.quantity > 1 ? (
                              <button
                                className="minusbutton"
                                onClick={() => updateCartD(item.products._id)}
                              >
                                -
                              </button>
                            ) : (
                              <button className="minusbutton" disabled>
                                -
                              </button>
                            )}

                            <input
                              type="text"
                              value={item.quantity}
                              className="text-center"
                            />
                            <button
                              className="plusbutton"
                              onClick={() => updateCartI(item.products._id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="pt-4 w-25 me-5">
                          <p>{item.products.productName}</p>
                        </div>
                        <div className="pt-4 me-2">
                          <p className="fw-bold">{item.products.offerprice}</p>
                          <p className="text-muted">
                            M.R.P.:<s>{item.products.price}</s> inclusive of all
                            taxes
                          </p>
                          <p className="text-muted">
                            you save:{item.products.discount.percentage}%(
                            {item.products.price - item.products.offerprice})
                          </p>
                          <p className="text-muted">free shipping</p>
                        </div>
                      </div>
                      <div className="remove">
                        <p
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to remove this product?"
                              ) == true
                            ) {
                              fnDeleteCart(item._id);
                            }
                          }}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="cart-information">
              <h6 className="ms-3">PRICE DETAILS</h6>
              <div className="cart-price">
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
        </div>
      )}
    </>
  );
}
