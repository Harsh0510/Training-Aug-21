import React from "react";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import profile from "../../../images/profile.jfif";
import { NotificationsNone, Settings } from "@material-ui/icons";

export default function Navbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src={profile} alt="profile" className="topAvatar" />
          </div>
        </div>
      </div>
    </>
  );
}
