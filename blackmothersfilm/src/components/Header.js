import React from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

export default function Header() {
  return (
    <div>
      <h1 className="headerTitle">Black Mothers:</h1>
      <button className="left-arrow">
        <img src={leftArrow} />
      </button>
      <button className="right-arrow">
        <img src={rightArrow} />
      </button>
      <h2>The Timeline</h2>
    </div>
  );
}
