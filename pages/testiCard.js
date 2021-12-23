import React, { useState } from "react";
import Image from "next/dist/client/image";
import testi1 from "../public/testi1.png";
import testi2 from "../public/testi2.png";
import testi3 from "../public/testi3.png";
import stars from "../public/stars.png";

function TestiCard() {
  const [testi, setTesti] = useState([
    {
      id: 1,
      img: testi1,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page",
      name: "Rahim Khan",
    },
    {
      id: 2,
      img: testi2,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page",
      name: "Usman Shand",
    },
    {
      id: 3,
      img: testi3,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page",
      name: "Sangeen wali",
    },
  ]);
  return (
    <div className="testiCardComponent">
      {testi.map((testi) => {
        return (
          <div className="testiCard" key={testi.id}>
            <Image src={testi.img} width={120} height={120} alt="testiimages" />
            <div className="testiStars">
              <Image src={stars} width={117} height={18} alt="stars" />
            </div>
            <div className="testiCardDesc">
              <h3>{testi.desc}</h3>
              <h2>{testi.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TestiCard;
