import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ResponsiveMenu from "./ui/ResponsiveMenu";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className="">
      {/* NAVBAR */}
      <nav className="text-center w-full h-14 flex items-center justify-between mb-4 bg-[#FFFFFF]">
        <Navbar handleMenu={handleMenu} />
      </nav>
      {/* MAIN  */}
      <main className="text-center w-full m-auto min-h-[calc(100vh-3.5rem)] relative">
        <ResponsiveMenu menu={menu} />
        {pathname === "/" ? <Home /> : <Outlet />}
      </main>
      {/* Footer */}
      <footer className="text-center w-full bg-[#FFFFFF]">Footer</footer>
      <ToastContainer />
    </div>
  );
};

export default Layout;
