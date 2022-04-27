import React from "react";
import Image from "../images/image.jpg";

export default function Info() {
  return (
    <div className="info">
      <img
        src={Image}
        alt="Andras Petrovci"
        width="320px"
        height="317px"
        id="andptrvc"
      />
      <h1>Andras Petrovci</h1>
      <h4>Full Stack Java Developer</h4>
      <h5>https://github.com/andptrvc</h5>
      <div className="buttonsholder">
        <button>Email</button>
        <button>Linkedin</button>
      </div>
    </div>
  );
}
