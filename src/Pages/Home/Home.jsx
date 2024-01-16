import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { CiShoppingBasket } from "react-icons/ci";
import img from "../../assets/image/Header.png";

const Home = () => {
  return (
    <div className="container">
      <div className={styles.home__page}>
        <div className={styles.home__text}>
          <div className={styles.title__text}>
            <h1>THE FURNITURE THAT DEFINES YOU</h1>
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
          <button className={styles.button}>
            <CiShoppingBasket />
            <Link to="/shop">Shop Now</Link>
          </button>
          </div>
        </div>
        <div className={styles.imgbox}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
