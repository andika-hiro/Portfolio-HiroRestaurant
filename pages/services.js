import React, { useState } from "react";
import Image from "next/image";
import services1 from "../public/services1.png";
import services2 from "../public/services2.png";
import services3 from "../public/services3.png";
import services4 from "../public/services4.png";
import services5 from "../public/services5.png";
import services6 from "../public/services6.png";
import line from "../public/line.svg";

function Services() {
  const [services, setServices] = useState([
    {
      id: 1,
      img: services1,
      title: "Service",
      desc: "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services",
    },
    {
      id: 2,
      img: services2,
      title: "Service",
      desc: "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services",
    },
    {
      id: 3,
      img: services3,
      title: "Service",
      desc: "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services",
    },
    {
      id: 4,
      img: services4,
      title: "Service",
      desc: "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services",
    },
    {
      id: 5,
      img: services5,
      title: "Service",
      desc: "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services",
    },
    {
      id: 6,
      img: services6,
      title: "Service",
      desc: "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services",
    },
  ]);
  return (
    <div className="services" id="services">
      <div className="servicesTitle">
        <h1>Why to choose us?</h1>
        <h3>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human</h3>
        <Image src={line} alt="line" />
      </div>
      <div className="ourservices">
        <div className="listServices">
          {services.map((services) => {
            return (
              <div className="cardServices" key={services.id}>
                <Image src={services.img} width={74} height={74} alt="services-image" />
                <h3>{services.title}</h3>
                <p>{services.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
