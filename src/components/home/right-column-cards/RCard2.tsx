import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RCFooter from "./RCFooter";

const RCard2 = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md px-4 py-8 mb-4 cursor-pointer relative ">
        <p className="text-sm">
          Mabaidul, unlock your full potential with linkedin Premium
        </p>
        <div className="px-4 py-2 flex items-center justify-center gap-6">
          <div className="relative group">
            {/* PROFILE LOGO */}
            <img
              className="w-16 h-16 rounded-full cursor-pointer"
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
              alt="profile-image"
            />
            <div className="absolute left-0 mt-2 w-32 font-semibold text-center text-xs border border-gray-500 bg-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              LinkedIn Profile
            </div>
          </div>

          <div className="relative group">
            {/* KEY LOGO */}
            <FontAwesomeIcon className="size-12 text-blue-400" icon={faKey} />
            <div className="absolute right-0 mt-2 w-32 font-semibold text-center text-xs border border-gray-500 bg-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              LinkedIn Premium
            </div>
          </div>
        </div>
        <p className="text-sm">
          See who's viewed your profile in the last 90 days
        </p>
        <div className="relative group">
          {/* TRY FOR FREE */}
          <button className="border border-blue-500 px-4 py-1 text-blue-500 rounded-full mt-4">
            Try for free
          </button>
          <div className="absolute right-0 mt-2 w-32 text-center font-semibold text-xs border border-gray-500 bg-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
            LinkedIn Premium
          </div>
        </div>
      </div>
      {/* RIGHT COL FOOTER */}
      <RCFooter />
    </>
  );
};

export default RCard2;
