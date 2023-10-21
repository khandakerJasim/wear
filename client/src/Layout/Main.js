import React from "react";
import Navbar from "../component/Shared/Navbar";
import Footer from "./../component/Shared/Footer";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
