import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ResponsiveMenu from "./ui/ResponsiveMenu";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";

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
      <main className="text-center w-full m-auto min-h-[calc(100vh-3.5rem)] bg-[#FFFFFF] relative">
        <ResponsiveMenu menu={menu} />
        {pathname === "/" ? <Home /> : <Outlet />}
      </main>
      {/* Footer */}
      <footer className="text-center w-full bg-[#FFFFFF]">Footer</footer>
    </div>
  );
};

export default Layout;
