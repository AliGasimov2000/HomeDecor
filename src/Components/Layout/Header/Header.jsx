import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdOutlineLocalGroceryStore, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openSearch = () => {
    setInputSearch(true);
  };

  const closeSearch = () => {
    setInputSearch(!true);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header>
      {inputSearch && (
        <div className={styles.bg__color}>
          <div className={styles.input__none}>
            <button>
              <CiSearch />
            </button>
            <input
              className={styles.input__search}
              type="text"
              placeholder="SEARCH OUR STORE"
            />
            <button onClick={closeSearch}>
              <Io MdClose />
            </button>
          </div>
        </div>
      )}
      <div className="container">
        <div className={styles.decor}>
          <div className={styles.searchbtn}>
            <button className={styles.langbtn}>Az</button>
            <button className={styles.search} onClick={openSearch}>
              <CiSearch />
            </button>
            <button className={styles.sidebar_icon} onClick={toggleMenu}>
              <MdMenu />
            </button>
          </div>
          <h2>HomeDecor</h2>
          <div className={styles.userbtn}>
            <button>
              <MdOutlineLocalGroceryStore />
            </button>
            <button>
              <CiUser />
            </button>
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
      <nav>
        <ul
          className={`${styles.nav__menu__items} ${isOpen ? styles.open : ""}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
