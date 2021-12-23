import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutUs from "./aboutus";
import OurMenu from "./ourmenu";
import headerrr from "../public/header.png";

function Header() {
  return (
    <div className="header" style={{ backgroundImage: `url(/header.png)` }}>
      <div className="Navbar">
        <Link href="/" passHref>
          <h3 className="logo">Hiro Food</h3>
        </Link>
        <div className="listed">
          <ul className="listNavbar">
            <Link href="#aboutusId" passHref>
              <li>About</li>
            </Link>
            <Link href="#ourmenu" passHref>
              <li>Menu</li>
            </Link>
            <Link href="#services" passHref>
              <li>Services</li>
            </Link>
            <Link href="#testi" passHref>
              <li>Testimonials</li>
            </Link>
            <Link href="#serve" passHref>
              <li>Serve</li>
            </Link>
            <Link href="#contact" passHref>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="webDesc">
        <div className="textHeader">
          <h1>Delecious food zone</h1>
          <h4>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</h4>
          <button>Book Your Table</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
