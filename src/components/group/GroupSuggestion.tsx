// import React from 'react'

const GroupSuggestion = () => {
  return (
    <div className="bg-white  shadow-md rounded-md mb-4  py-4 px-1 w-[17rem]">
      <h1 className="font-semibold text-gray-800">
        Groups you might be interested in
      </h1>
      {/* SHOW INTEREST GROUPS IN MAP */}
      <div className="">
        <div className="flex items-center  gap-4 px-4">
          <img width={50} src="/LinkedIn_icon.svg.png" alt="group-icon" />
          <div className="pt-4 text-left">
            <h2 className=" font-semibold hover:underline cursor-pointer">
              Title of the group 1
            </h2>
            <p className="text-sm">300000 memebrs</p>
            <button className="border border-gray-500 rounded-full px-4 py-1 hover:bg-gray-200 text-gray-600 font-semibold mt-2">
              Join
            </button>
          </div>
        </div>
        {/* DIVIER */}
        <div className="border-b border-gray-200 my-4" />

        <div className="flex items-center  gap-4 px-4">
          <img width={50} src="/LinkedIn_icon.svg.png" alt="group-icon" />
          <div className="pt-4 text-left">
            <h2 className=" font-semibold hover:underline cursor-pointer">
              Title of the group 2
            </h2>
            <p className="text-sm">300000 memebrs</p>
            <button className="border border-gray-500 rounded-full px-4 py-1 hover:bg-gray-200 text-gray-600 font-semibold mt-2">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSuggestion;
