import React, { useState } from "react";
import Image from "next/image";
import line from "../public/line.svg";

function ServeCard() {
  const [serveText, setServeText] = useState([
    {
      id: 1,
      number: "56,789",
      title: "Customer Served",
      line: line,
    },
    {
      id: 2,
      number: "10,023",
      title: "Customer Served",
      line: line,
    },
    {
      id: 3,
      number: "4,554",
      title: "Customer Served",
      line: line,
    },
    {
      id: 4,
      number: "12,520",
      title: "Customer Served",
      line: line,
    },
  ]);
  return (
    <div className="containerServe">
      {serveText.map((serve) => {
        return (
          <div className="serveCard" key={serve.id}>
            <h2>{serve.number}</h2>
            <h3>{serve.title}</h3>
            <Image src={serve.line} alt="line" />
          </div>
        );
      })}
    </div>
  );
}

export default ServeCard;
