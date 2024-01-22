import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { CiShoppingBasket } from "react-icons/ci";
const Button = () => {
  return (
    <div>
      <button className={styles.button}>
        <CiShoppingBasket />
        <Link to="/shop">Shop Now</Link>
      </button>
    </div>
  );
};

export default Button;
