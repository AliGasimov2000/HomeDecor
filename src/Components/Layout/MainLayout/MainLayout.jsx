import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;
