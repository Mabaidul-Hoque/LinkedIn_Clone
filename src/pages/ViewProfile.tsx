// import React from 'react'

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
        <div className="bg-white  shadow-md rounded-md mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          fugit illum culpa eaque natus consequuntur impedit voluptatum deserunt
          cumque doloribus asperiores ea ad excepturi eum qui nesciunt quis
          omnis, officiis fuga optio a error! Aut, labore libero, provident, sit
          tempora incidunt harum recusandae cumque explicabo fugit accusantium
          totam cupiditate adipisci!
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
