import React from "react";
import backToTheTop from "../assets/back-to-top-arrow.png";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <a href="#header" className="back-to-the-top">
          <img src={backToTheTop} />
        </a>
      </div>
    );
  }
}
