import React from "react";
import DiscountImg from "../../assets/image/Discount.png";
import Button from "../../Components/Button/Button";
import styles from "../Discount/Discount.module.css";

const Discount = () => {
  return (
    <>
      <div className={styles.imgbox}>
        <img src={DiscountImg} alt="" />
        <div className={styles.discount__text}>
          <h2>20% DISCOUNT</h2>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo
          </p>
          <div className={styles.btn}>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
