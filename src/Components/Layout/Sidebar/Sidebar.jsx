import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div>
        <button>
          <MdOutlineLocalGroceryStore />
        </button>
      </div>
      <div className={`sidebar `}>
        <button onClick={toggleMenu} className="toggle-btn"></button>
      </div>
    </>
  );
};

export default Sidebar;
