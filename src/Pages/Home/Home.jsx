import React from "react";
import styles from "./Home.module.css";
import About from "../About/About";
import img from "../../assets/image/Header.png";
import Button from "../../Components/Button/Button";
import Swiper from "./Swiper";
import Discount from "../Discount/Discount";


const Home = () => {
  return (
    <>
      <div className="container">
        <div className={styles.home__page}>
          <div className={styles.home__text}>
            <div className={styles.title__text}>
              <h1>THE FURNITURE THAT DEFINES YOU</h1>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum
              </p>
              <Button />
            </div>
          </div>
          <div className={styles.imgbox}>
            <div className={styles.opacity__div}></div>
            <img src={img} alt="" />
          </div>
        </div>
        <Swiper />
        <About />
      </div>
      <Discount />
    </>
  );
};

export default Home;
