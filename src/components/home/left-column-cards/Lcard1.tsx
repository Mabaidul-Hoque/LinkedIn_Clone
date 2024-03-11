const Lcard1 = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md pb-2 mb-4">
        {/* CARD1 HEADER */}
        <div className="">
          {/* BACKGROUND IMAGE */}
          <img
            className="h-20 w-full bg-cover bg-center rounded-t-md"
            src="/frontend_dev_logo.jpeg"
            alt="background-image"
          />
          {/* PROFILE IMAGE */}
          <div className="flex items-center justify-center">
            <img
              className="w-14 h-14 rounded-full cursor-pointer"
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
              alt="profile-image"
            />
          </div>
        </div>
        {/* CARD PROFILE DETAILS */}
        <div className=""></div>
        {/* PROFILE VIEWERS */}
        <div className=""></div>
        {/* TRY PREMIUM */}
        <div className=""></div>
        {/* MY ITEMS */}
        <div className=""></div>
      </div>
    </>
  );
};

export default Lcard1;
