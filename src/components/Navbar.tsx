import {
  faBell,
  faBriefcase,
  faCaretDown,
  faCircleUser,
  faCommentDots,
  faEllipsis,
  faGripVertical,
  faHouse,
  faMagnifyingGlass,
  faRectangleAd,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AutocompleteModal from "../ui/AutocompleteModal";

interface NavabrProps {
  handleMenu: () => void;
}
const Navbar: React.FC<NavabrProps> = ({ handleMenu }) => {
  const [activeIndx, setActiveIndx] = useState(1);
  const [isSearchClick, setIsSearchClick] = useState(false);

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
            onClick={() => setActiveIndx(1)}
            className={`${
              activeIndx === 1
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2`}
          >
            <a className="flex flex-col justify-center items-center" href="#">
              <FontAwesomeIcon className="w-6 h-6" icon={faHouse} />
              <span className="text-[12px] max-[800px]:hidden">Home</span>
            </a>
          </li>
          {/* MY NETWORK ROUTE */}
          <li
            onClick={() => setActiveIndx(2)}
            className={`${
              activeIndx === 2
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2`}
          >
            <a className="flex flex-col justify-center items-center" href="#">
              <FontAwesomeIcon className="w-6 h-6" icon={faUserGroup} />
              <span className="text-[12px] max-[800px]:hidden">My Network</span>
            </a>
          </li>
          {/* JOBS ROUTE */}
          <li
            onClick={() => setActiveIndx(3)}
            className={`${
              activeIndx === 3
                ? "text-black border-b-2 border-black "
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2`}
          >
            <a className="flex flex-col justify-center items-center" href="#">
              <FontAwesomeIcon className="w-6 h-6" icon={faBriefcase} />
              <span className="text-[12px] max-[800px]:hidden">Jobs</span>
            </a>
          </li>
          {/* MESSAGING ROUTE */}
          <li
            onClick={() => setActiveIndx(4)}
            className={`${
              activeIndx === 4
                ? "text-black border-b-2 border-black "
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2 max-[350px]:hidden`}
          >
            <a className="flex flex-col justify-center items-center" href="#">
              <FontAwesomeIcon className="w-6 h-6" icon={faCommentDots} />
              <span className="text-[12px] max-[800px]:hidden">Messaging</span>
            </a>
          </li>
          {/* NOTIFICATIONS ROUTE */}
          <li
            onClick={() => setActiveIndx(5)}
            className={`${
              activeIndx === 5
                ? "text-black border-b-2 border-black  "
                : "text-gray-600"
            } hover:text-black p-4 pb-2 pt-2 max-[410px]:hidden`}
          >
            <a className="flex flex-col justify-center items-center" href="#">
              <FontAwesomeIcon className="w-6 h-6" icon={faBell} />
              <span className="text-[12px] max-[800px]:hidden">
                Notifications
              </span>
            </a>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4 max-[550px]:hidden">
          {/* PROFILE SECTION */}
          <div className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer">
            <FontAwesomeIcon className="w-6 h-6" icon={faCircleUser} />
            <span className="text-[12px] max-[800px]:hidden">
              Me <FontAwesomeIcon className="w-3 h-3" icon={faCaretDown} />
            </span>
          </div>
          {/* DIVIDER */}
          <div className="border-r-1 border-gray-500"></div>
          {/*  FOR BUSSINESS  */}
          <div className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer">
            <FontAwesomeIcon className="w-6 h-6" icon={faGripVertical} />
            <span className="text-[12px] max-[800px]:hidden">
              For Bussiness{" "}
              <FontAwesomeIcon className="w-3 h-3" icon={faCaretDown} />
            </span>
          </div>
          {/* ADVERTISE */}
          <div className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer">
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
