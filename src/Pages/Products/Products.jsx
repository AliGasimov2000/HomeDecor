import React from "react";
import styles from "./Products";


const Products = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h3>PRODUCTS</h3>
          <span>SEE ALL</span>
        </div>
        <div className={styles.imgbox}>
          <img src={img} alt="" />
        </div>
        <div className={styles.imgbox}>
          <img src={img} alt="" />
        </div>
        <div className="imgbox">
          <img src={img} alt="" />
        </div>
        <div className="imgbox">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
