import React from "react";
import Card from "./card";
import Image from "next/image";
import line from "../public/line.svg";

function OurMenu() {
  return (
    <div className="ourmenu-container" id="ourmenu">
      <div className="ourmenu-title-container">
        <div className="ourmenu-title">
          <h1>Our Menu</h1>
          <h3>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human</h3>
          <Image src={line} alt="line" />
        </div>
      </div>

      <div className="ourmenu-card">
        <Card />
      </div>
    </div>
  );
}
export default OurMenu;
