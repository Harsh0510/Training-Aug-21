import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/admin/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateCenter">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>FullName</label>
                  <input
                    type="text"
                    placeholder="jhvjhvhj"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="khbhjhj"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>PhoneNumber</label>
                  <input
                    type="text"
                    placeholder="9909090990"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="jhyfftdfgfc"
                    className="userUpdateInput"
                  />
                </div>
                <button className="userUpdateButton">update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
