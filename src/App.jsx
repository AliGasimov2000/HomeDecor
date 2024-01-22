import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MainLayout from "./Components/Layout/MainLayout/MainLayout";
import Collections from "./Pages/Collections";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Collections" element={<Collections />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
