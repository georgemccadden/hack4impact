import React from "react";
import tallRectangle from "../assets/rectangle.png";
import wideRectangle from "../assets/wide-rectangle.png";

export default function Main() {
  return (
    <div>
      <h5>Sept. 7th, 2017</h5>
      <h1>Article Heading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra
        sapien quis lacus euismod mollis. Praesent lorem erat, gravida quis
        tellus eu, bibendum pharetra sapien. Morbi lobortis leo quis ultricies
        hendrerit. Vivamus hendrerit, ante ut efficitur maximus, leo magna
        venenatis augue
      </p>
      <img src={tallRectangle} />
      <img src={wideRectangle} />
      <img src={wideRectangle} />
    </div>
  );
}
