import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { faFileVideo, faImage } from "@fortawesome/free-solid-svg-icons";
import EditNoteIcon from "@mui/icons-material/EditNote";

const MTopCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      eventName,
      eventDescription,
      eventStartDate,
      eventEndDate,
      backgroundImage,
    });
    handleModalClose();
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      {/* CREATE POST HEADER */}
      <div className="flex items-center gap-4">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          alt="User Profile"
          className="w-14 h-14 rounded-full cursor-pointer"
        />
        <input
          type="text"
          placeholder="Start a post"
          className="flex-grow px-2 py-1 pl-8 border rounded-full h-12 focus:outline-blue-500 hover:bg-gray-100"
        />
      </div>
      {/* UPLOADED OPTIONS */}
      <div className="flex items-center justify-between mt-2 px-6">
        {/* IMAGE FILE */}
        <label className="cursor-pointer">
          <input type="file" className="hidden" />
          <span className="px-4 py-2 hover:bg-gray-200 rounded-md flex items-center gap-2">
            {/* <InsertPhotoIcon htmlColor="#378FE9" /> */}
            <FontAwesomeIcon className="text-[#378FE9] size-5" icon={faImage} />
            Media
          </span>
        </label>

        {/* EVENT */}
        <div>
          <button
            className="px-4 py-2 rounded-md flex items-center gap-1 hover:bg-gray-200"
            onClick={handleModalOpen}
          >
            <CalendarMonthOutlinedIcon htmlColor="#C37D16" />
            <span>Event</span>
          </button>
          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed z-10 inset-0 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Create Event
                        </h3>
                        <div className="mt-2">
                          <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="eventName"
                              >
                                Event Name
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="eventName"
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="eventDescription"
                              >
                                Event Description
                              </label>
                              <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="eventDescription"
                                placeholder="Event Description"
                                value={eventDescription}
                                onChange={(e) =>
                                  setEventDescription(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="eventStartDate"
                              >
                                Start Date
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="eventStartDate"
                                type="date"
                                value={eventStartDate}
                                onChange={(e) =>
                                  setEventStartDate(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="eventEndDate"
                              >
                                End Date
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="eventEndDate"
                                type="date"
                                value={eventEndDate}
                                onChange={(e) =>
                                  setEventEndDate(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="backgroundImage"
                              >
                                Background Image
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="backgroundImage"
                                type="file"
                                onChange={(e) =>
                                  e.target.files && e.target.files.length > 0
                                    ? setBackgroundImage(e.target.files[0])
                                    : null
                                }
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                              >
                                Create Event
                              </button>
                              <button
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleModalClose}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* WRITE FILE */}
        <button className="px-4 py-2 rounded-md flex items-center gap-1 hover:bg-gray-200">
          <EditNoteIcon htmlColor="#E06847" />
          <span>Write article</span>
        </button>
      </div>
    </div>
  );
};

export default MTopCard;
