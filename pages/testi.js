import React from "react";
import TestiCard from "./testiCard";
import Image from "next/image";
import line from "../public/line.svg";

function Testi() {
  return (
    <div className="testi" id="testi" style={{ backgroundImage: `url(/imgTesti.png)` }}>
      <div className="titleTestiParent">
        <div className="titleTesti">
          <h1>Listen to our customers</h1>
          <h3>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human</h3>
          <Image src={line} alt="line" />
        </div>
      </div>

      <div className="testiCardContainer">
        <TestiCard />
      </div>
    </div>
  );
}
export default Testi;
