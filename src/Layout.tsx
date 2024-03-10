import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBriefcase,
  faCaretDown,
  faCircleUser,
  faCommentDots,
  faGripVertical,
  faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  const [menu, setMenu] = useState(false);
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
        main
        {menu && (
          <div className="flex absolute right-0 top-0 bg-white border border-gray-300 rounded shadow-lg">
            {/* MESSAGING ROUTE */}
            <div
              className={`
                text-gray-600
              hover:text-black p-4 pb-2 pt-2 min-[350px]:hidden`}
            >
              <a className="flex flex-col justify-center items-center" href="#">
                <FontAwesomeIcon className="w-6 h-6" icon={faCommentDots} />
                <span className="text-[12px] max-[800px]:hidden">
                  Messaging
                </span>
              </a>
            </div>
            {/* NOTIFICATIONS ROUTE */}
            <div
              className={`text-gray-600  hover:text-black p-4 pb-2 pt-2 min-[410px]:hidden`}
            >
              <a className="flex flex-col justify-center items-center" href="#">
                <FontAwesomeIcon className="w-6 h-6" icon={faBell} />
                <span className="text-[12px] max-[800px]:hidden">
                  Notifications
                </span>
              </a>
            </div>

            {/* PROFILE SECTION */}
            <div className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer  p-4 pb-2 pt-2 min-[550px]:hidden">
              <FontAwesomeIcon className="w-6 h-6" icon={faCircleUser} />
              <span className="text-[12px] max-[800px]:hidden">
                Me <FontAwesomeIcon className="w-3 h-3" icon={faCaretDown} />
              </span>
            </div>
            {/*  FOR BUSSINESS  */}
            <div className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer  p-4 pb-2 pt-2 min-[550px]:hidden">
              <FontAwesomeIcon className="w-6 h-6" icon={faGripVertical} />
              <span className="text-[12px] max-[800px]:hidden">
                For Bussiness{" "}
                <FontAwesomeIcon className="w-3 h-3" icon={faCaretDown} />
              </span>
            </div>
            {/* ADVERTISE */}
            <div className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer  p-4 pb-2 pt-2 min-[550px]:hidden">
              <FontAwesomeIcon className="w-6 h-6" icon={faRectangleAd} />
              <span className="text-[12px] max-[800px]:hidden">Advertise</span>
            </div>
          </div>
        )}
      </main>
      {/* Footer */}
      <footer className="text-center w-full bg-[#FFFFFF]">Footer</footer>
    </div>
  );
};

export default Layout;
