// import React from 'react'

import { Divider } from "antd";
import { ProfileDetails } from "../components/view-profile";

const ViewProfile = () => {
  return (
    <div className="max-[760px]:max-w-[600px] w-[95%] xl:w-[82%] mx-auto grid grid-cols-1 md:grid-cols-7 gap-8">
      {/* LEFT COLUMN CONTAINER */}
      <div className="md:block md:col-span-5 lg:block lg:col-span-5">
        <div className="bg-white  shadow-md rounded-md mb-4">
          <ProfileDetails />
        </div>
      </div>

      {/* RIGHT COLUMN CONTAINER */}
      <div className="hidden  md:block md:col-span-2">
        <div className="bg-white  shadow-md rounded-md mb-4 p-4 text-left">
          <h2 className="text-xl font-semibold text-gray-700">
            Profile language
          </h2>
          <p className="text-gray-500">English</p>
          <Divider />
          <h2 className="text-xl font-semibold text-gray-700">
            Public profile & URL
          </h2>
          <p className="text-gray-500">www.linkedin.com/in/userID</p>
        </div>

        <div className="bg-white  shadow-md rounded-md mb-4 text-left">
          <div className="p-4">
            <p className="text-right">Ad</p>
            <p>
              Unlock new design layouts for floors & walls with Vitero Tiles
            </p>
          </div>
          <img src="/vitero.png" alt="ad-image" />
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
