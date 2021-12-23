import React from "react";
import Image from "next/image";
import aboutusImage from "../public/aboutus.png";
import line from "../public/line.svg";

function AboutUs() {
  return (
    <div className="aboutUsParent" id="aboutusId">
      <div className="aboutUs">
        <div className="imageaboutus">
          <Image src={aboutusImage} width={566} height={509} alt="aboutusimage" />
        </div>
        <div className="aboutDesc">
          <h1>About us</h1>
          <Image src={line} alt="line" />
          <p className="p1">
            Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is one of the most wholesome foods that man can eat. In fact,
          </p>
          <p className="p2">Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
