import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Group } from "../../pages/Groups";
interface GroupInfoProps {
  singleGroup: Group;
}

const GroupInfo: React.FC<GroupInfoProps> = ({ singleGroup }) => {
  return (
    <div className="bg-white shadow-md rounded-md min-h-[50vh]">
      {/* BACKGROUNG IMAGE */}
      <div className="relative min-h-[25vh] bg-grp-profile-bg-logo bg-cover rounded-t-md">
        {/* PROFILE IMAGE  */}
        <div className="absolute top-28 left-5">
          <img
            className="rounded-md"
            width={120}
            src={singleGroup.image || "/profile-background-logo.webp"}
          />
        </div>
      </div>
      <div className="mx-6 text-left flex flex-col gap-2 pb-8 mt-16">
        {/* GROUP NAME */}
        <h1 className="text-3xl font-semibold text-gray-800">
          {singleGroup.name}
        </h1>
        <p>
          <FontAwesomeIcon className="pr-1 text-gray-600" icon={faUsers} />
          Private Listed
        </p>
        <p className="bg-[#01754F] w-fit text-white  px-1 rounded-md text-md font-semibold">
          Active Group
        </p>
      </div>
    </div>
  );
};

export default GroupInfo;
