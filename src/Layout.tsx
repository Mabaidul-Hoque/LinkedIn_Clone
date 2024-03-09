import React from "react";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="text-center w-screen h-24 flex items-center justify-between">
        <Navbar />
      </nav>
      {/* MAIN  */}
      <main className="text-center">Main</main>
      {/* Footer */}
      <footer className="text-center">Footer</footer>
    </div>
  );
};

export default Layout;
