// import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthProvider";

const GDLcard1 = () => {
  //   const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <>
      <div className="bg-white shadow-md rounded-md mb-4 min-h-[30vh] z-10">
        {/* CARD1 HEADER */}
        <div className="flex items-center justify-center bg-profile-logo bg-custom bg-center h-20 rounded-t-lg">
          <img
            className="w-16 h-16 rounded-full cursor-pointer mt-20"
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            alt="profile-image"
          />
        </div>
        {/* USER NAME AND GROUP JOINED TIME CONATINER*/}
        <div className="mt-12">
          <h2 className="text-lg text-gray-700 font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">Joined group: Dec 2023</p>
        </div>
      </div>
    </>
  );
};

export default GDLcard1;
