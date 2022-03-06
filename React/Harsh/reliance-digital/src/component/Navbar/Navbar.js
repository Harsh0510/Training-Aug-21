import React from "react";
import logo from "../../images/logo.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { useAuthContext } from "../../Context/AuthContext";
import { useCartContext } from "../../Context/CartContext";
export default function Navbar() {
  const { user } = useAuthContext();
  const { cart } = useCartContext();

  return (
    <>
      <div className="navparent">
        <header>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="input-group center">
            <input
              type="text"
              className="form-control shadow-none input"
              placeholder="Find your favorite products"
            />
            <button
              className="btn btn-primary shadow-none button"
              type="button"
            >
              Search
            </button>
          </div>
          <div className="right">
            <div className="contact">Contact us</div>
            <div className="line"></div>
            <Link to="/cart" className="text-decoration-none text-white">
              <div className="cart">
                <FaShoppingCart />{" "}
                <span className="s">
                  Cart{" "}
                  {cart.length > 0 && (
                    <span className="cartLength">{cart.length}</span>
                  )}
                </span>
              </div>
            </Link>
            <div className="line"></div>
            {Object.keys(user).length > 0 ? (
              <>
                <div
                  className="logn dropdown-toggle text-capitalize"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                >
                  <FaUser /> {user.firstName}
                </div>
                <div className="dropdown-menu loginDropdown">
                  <div>
                    {user.roles._id == 1 && (
                      <Link
                        to="/admin"
                        className="text-decoration-none text-white fs-5 ms-5"
                      >
                        Admin
                      </Link>
                    )}
                  </div>
                  <div>
                    <Link
                      to="/logout"
                      className="text-decoration-none text-white fs-5 ms-5"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login" className="text-decoration-none text-white">
                <div className="logn">
                  <FaUser /> Login
                </div>
              </Link>
            )}
          </div>
        </header>
        <Dropdown />
      </div>
    </>
  );
}
