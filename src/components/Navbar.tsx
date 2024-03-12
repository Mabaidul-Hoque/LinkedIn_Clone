import {
  faBell,
  faBriefcase,
  faCaretDown,
  faCommentDots,
  faEllipsis,
  faGripVertical,
  faHouse,
  faRectangleAd,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AutocompleteModal from "../ui/AutocompleteModal";
import ProfileDropdown from "../ui/ProfileDropdown";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

interface NavabrProps {
  handleMenu: () => void;
}
const Navbar: React.FC<NavabrProps> = ({ handleMenu }) => {
  const [isSearchClick, setIsSearchClick] = useState(false);
  const { pathname } = useLocation();

  const searchClick = () => {
    setIsSearchClick((prev) => !prev);
  };

  return (
    <div className="w-[95%] xl:w-[82%] m-auto h-full py-2 flex items-center justify-between">
      {/* LOGO/SEARCH CONTAINER */}
      <div className="flex items-center gap-4 relative">
        <img
          className="w-9 h-9"
          src="/LinkedIn_icon.svg.png"
          alt="LinedIn_logo"
        />
        {/* SEARCH SECTION */}
        <div className="flex items-center">
          <input
            className={`bg-[#EDF3F8] w-64 xl:focus:w-80 h-9 pl-10 rounded focus:outline-blue-500 ${
              isSearchClick ? "block" : "hidden"
            } lg:block`}
            type="text"
            id="search-input"
            placeholder="Search"
          />
          {/* SEARCH ICON */}
          <AutocompleteModal
            searchClick={searchClick}
            isSearchClick={isSearchClick}
          />
        </div>
      </div>

      {/* RIGHT ITEMS CONTAINER */}
      <div className={`flex items-center gap-4`}>
        <ul className="flex items-center">
          {/* HOME ROUTE */}
          <li
            className={`${
              pathname === "/" || pathname === "/feed"
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2`}
          >
            <Link
              className="flex flex-col justify-center items-center"
              to="/feed"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faHouse} />
              <span className="text-[12px] max-[800px]:hidden">Home</span>
            </Link>
          </li>
          {/* MY NETWORK ROUTE */}
          <li
            className={`${
              pathname === "/mynetwork"
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2`}
          >
            <Link
              className="flex flex-col justify-center items-center"
              to="/mynetwork"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faUserGroup} />
              <span className="text-[12px] max-[800px]:hidden">My Network</span>
            </Link>
          </li>
          {/* JOBS ROUTE */}
          <li
            className={`${
              pathname === "/jobs"
                ? "text-black border-b-2 border-black "
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2`}
          >
            <Link
              className="flex flex-col justify-center items-center"
              to="/jobs"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faBriefcase} />
              <span className="text-[12px] max-[800px]:hidden">Jobs</span>
            </Link>
          </li>
          {/* MESSAGING ROUTE */}
          <li
            className={`${
              pathname === "/messaging"
                ? "text-black border-b-2 border-black "
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2 max-[350px]:hidden`}
          >
            <Link
              className="flex flex-col justify-center items-center"
              to="/messaging"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faCommentDots} />
              <span className="text-[12px] max-[800px]:hidden">Messaging</span>
            </Link>
          </li>
          {/* NOTIFICATIONS ROUTE */}
          <li
            className={`${
              pathname === "/notifications"
                ? "text-black border-b-2 border-black  "
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2 max-[410px]:hidden`}
          >
            <Link
              className="flex flex-col justify-center items-center"
              to="/notifications"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faBell} />
              <span className="text-[12px] max-[800px]:hidden">
                Notifications
              </span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4 max-[550px]:hidden">
          {/* PROFILE SECTION */}
          <ProfileDropdown />
          {/* DIVIDER */}
          <div className="border-r-1 border-gray-500"></div>
          {/*  FOR BUSSINESS  */}
          <div
            onClick={() => toast.info("Cooming Soon...!", { theme: "colored" })}
            className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer"
          >
            <FontAwesomeIcon className="w-6 h-6" icon={faGripVertical} />
            <span className="text-[12px] max-[800px]:hidden">
              For Bussiness{" "}
              <FontAwesomeIcon className="w-3 h-3" icon={faCaretDown} />
            </span>
          </div>
          {/* ADVERTISE */}
          <div
            onClick={() => toast.info("Cooming Soon...!", { theme: "colored" })}
            className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer"
          >
            <FontAwesomeIcon className="w-6 h-6" icon={faRectangleAd} />
            <span className="text-[12px] max-[800px]:hidden">Advertise</span>
          </div>
        </div>
        {/* RESPONSIVE MENU */}
        <div onClick={handleMenu} className="cursor-pointer min-[550px]:hidden">
          <FontAwesomeIcon className="text-3xl" icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
