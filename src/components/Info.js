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
        <a href="mailto:apetrovci@outlook.com">
          <button className="email">Email</button>
        </a>
        <a href="https://www.linkedin.com/in/andptrvc/" target="_blank">
          <button className="linkedin">Linkedin</button>
        </a>
      </div>
    </div>
  );
}
