import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./header";
import AboutUs from "./aboutus";
import OurMenu from "./ourmenu";
import Services from "./services";
import Testi from "./testi";
import Serve from "./serve";
import Footer from "./footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutUs />
      <OurMenu />
      <Services />
      <Testi />
      <Serve />
      <Footer />
    </div>
  );
}
