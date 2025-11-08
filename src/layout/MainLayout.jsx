import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="container my-5 pt-4 pb-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
