import React from "react";
import styles from "./Header.module.css";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";


const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.container}>
          <div className={styles.decor}>
            <div className={styles.searchbtn}>
              <button>Az</button>
              <CiSearch />
            </div>
            <h2>HomeDecor</h2>
            <div>
              <MdOutlineLocalGroceryStore />
              <CiUser />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
