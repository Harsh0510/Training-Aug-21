import React, { Component } from "react";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TourList />
      </>
    );
  }
}
