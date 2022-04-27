import React from "react";
import Facebook from "../images/facebook.svg";
import Github from "../images/github.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/andptrvc" target="_blank">
        <img src={Twitter} alt="twitter icon" />
      </a>
      <a href="https://www.facebook.com/andptrvc" target="_blank">
        <img src={Facebook} alt="facebook icon" />
      </a>
      <a href="https://www.instagram.com/andptrvc/" target="_blank">
        <img src={Instagram} alt="instagram icon" />
      </a>
      <a href="https://github.com/andptrvc" target="_blank">
        <img src={Github} alt="github icon" />
      </a>
    </div>
  );
}
