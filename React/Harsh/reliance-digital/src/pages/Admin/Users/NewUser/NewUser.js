import React from "react";
import "./NewUser.css";

export default function NewUser() {
  return (
    <>
      <div className="newUser">
        <h1 className="newUser">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
            <label>FullName</label>
            <input type="text" placeholder="john jhjkbkj" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="text" placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>phoneNumber</label>
            <input type="text" placeholder="9789765588" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="jaymala" />
          </div>
          <button className="newUserButton">Create</button>
        </form>
      </div>
    </>
  );
}
