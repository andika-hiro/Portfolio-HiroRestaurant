import React, { useState } from "react";
import Image from "next/image";
import stars from "../public/stars.png";
import img0 from "../public/img.png";
import img1 from "../public/img-1.png";
import img2 from "../public/img-2.png";
import img3 from "../public/img-3.png";
import img4 from "../public/img-4.png";
import img5 from "../public/img-5.png";
import img6 from "../public/img-6.png";
import img7 from "../public/img-7.png";

function Card() {
  const [card, setCard] = useState([
    {
      id: 1,
      index: img0,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
    {
      id: 2,
      index: img1,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
    {
      id: 3,
      index: img2,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
    {
      id: 4,
      index: img3,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
    {
      id: 5,
      index: img4,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
    {
      id: 6,
      index: img5,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
    {
      id: 7,
      index: img6,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
    {
      id: 8,
      index: img7,
      title: "Spicey meatballs",
      price: "Rp 70.000",
      desc: "Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
    },
  ]);
  return (
    <div className="ourmenu-card-container">
      {card.map((card) => {
        return (
          <div className="card" key={card.id}>
            <Image src={card.index} alt="image1" width={277} height={208} />
            <div className="stars">
              <Image src={stars} alt="stars" width={117} height={18} />
            </div>
            <div className="desc-card">
              <h1>{card.title}</h1>
              <h4>{card.price}</h4>
              <h3>{card.desc}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
