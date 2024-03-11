import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Lcard1 = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md mb-4">
        {/* CARD1 HEADER */}
        <div className="relative">
          {/* BACKGROUND IMAGE */}
          <img
            className="h-20 w-full bg-cover bg-center rounded-t-md"
            src="/frontend_dev_logo.jpeg"
            alt="background-image"
          />
          {/* PROFILE IMAGE */}
          <div className="flex items-center justify-center absolute top-12 left-[40%]">
            <img
              className="w-16 h-16 rounded-full cursor-pointer"
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
              alt="profile-image"
            />
          </div>
        </div>
        {/* CARD PROFILE DETAILS */}
        <div className="mt-12 px-2">
          {/* USER NAME */}
          <h2 className="font-semibold">Mabaidul Hoque</h2>
          <p className="text-sm">
            Passionate Full Stack Developer | Expertise in Frontend Technologies
            | Continuous Learner & Problem Solver
          </p>
        </div>
        {/* DIVIDER */}
        <div className="border-b border-gray-300 mt-2 mb-2" />
        {/* PROFILE VIEWERS */}
        <div className="flex flex-col text-left ">
          <div className="px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">
            <button>Profile viewers</button>
          </div>
          <div className="px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">
            <button>View all analytics</button>
          </div>
        </div>
        {/* DIVIDER */}
        <div className="border-b border-gray-300 mt-2" />
        {/* TRY PREMIUM */}
        <div className="px-4 py-2 hover:bg-gray-300 cursor-pointer text-sm group">
          <p className="text-left">
            Strengthen your profile with an AI writing asistant
          </p>
          <p className="text-left flex items-center gap-2">
            <img
              className="w-4 h-4 object-cover"
              src="/yellow-background_primum_logo.avif"
              alt="primum_logo"
            />
            <span className="font-semibold hover:underline group-hover:text-blue-500">
              Try Premium for ₹0
            </span>
          </p>
        </div>
        {/* DIVIDER */}
        <div className="border-b border-gray-300" />
        {/* MY ITEMS */}
        <div className="text-left flex items-center gap-2 px-4 py-3 hover:bg-gray-300">
          <FontAwesomeIcon className="text-gray-500" icon={faBookmark} />
          <span className="text-sm">My items</span>
        </div>
      </div>
    </>
  );
};

export default Lcard1;
