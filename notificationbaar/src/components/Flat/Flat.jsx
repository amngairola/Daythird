import React from "react";
import check from "../img/check.png";
import "../All.css";

export default function Flat() {
  return (
    <div className="main">
      <div className="flat my-component-black">
        <img className="img" src={check} alt="Canvas Logo" />
        <p>file has been removed sucessfully</p>
      </div>
      <div className="flat my-component-white">
        <img className="img" src={check} alt="Canvas Logo" />
        <p>file has been removed sucessfully</p>
      </div>
    </div>
  );
}
