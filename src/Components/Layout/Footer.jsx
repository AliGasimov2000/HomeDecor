import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div>
            <h2>HomeDecor</h2>
            <p>&copy;2022 All Right Reserved. Developed by Webcoder Agency</p>
          </div>
          <div>
            <span>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
            </span>
          </div>
          <ul className={styles.contact}>
            <li>+994 50 555 55 55</li>
            <li>youremailhere@gmail.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
