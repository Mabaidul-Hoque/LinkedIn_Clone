import {
  faCaretDown,
  faImage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
  const [postContent, setPostContent] = useState("");
  const [postSettings, setPostSettings] = useState("anyone");
  const [emojiInput, setEmojiInput] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const handleEmojiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmojiInput(e.target.value);
  };

  const handleMediaFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setMediaFile(e.target.files[0]);
    }
  };

  const handlePostContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostContent(e.target.value);
  };

  const handlePostSettingsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostSettings(e.target.value);
  };

  const handlePost = () => {
    console.log("Posting:", postContent, postSettings);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* MODAL */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        {/* MODAL INSIDE CONTENT */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[50%] sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start sm:flex-col">
              {/* MODAL HEADER */}
              <div className="w-full flex justify-between">
                {/* LEFT HEADER */}
                <div className="flex items-center gap-2 hover:bg-gray-200 p-2 hover:rounded-md cursor-pointer">
                  {/* USER IMAGE*/}
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
                    alt="User Profile"
                    className="w-14 h-14 rounded-full cursor-pointer"
                  />
                  <div className="flex flex-col text-left">
                    {/* USER NAME */}
                    <p className="font-semibold text-xl">
                      Mabaidul Hoque
                      <FontAwesomeIcon
                        className="text-gray-600 ml-2"
                        icon={faCaretDown}
                      />
                    </p>
                    {/* VISIBILITY */}
                    <p className="text-sm">Post to Anyone</p>
                  </div>
                </div>
                {/* RIGHT HEADER: CLOSE MODAL ICON */}
                <FontAwesomeIcon
                  className="size-6 text-gray-700 cursor-pointer hover:text-red-500"
                  icon={faXmark}
                  onClick={onClose}
                />
              </div>
              {/* WRITE CONTENT */}
              <div className="w-full mt-2">
                <textarea
                  className="w-full min-h-64 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows={4}
                  placeholder="What do you want to talk about?"
                  value={postContent}
                  onChange={handlePostContentChange}
                ></textarea>
              </div>
              {/* ADD EMOJI AND MEDIA */}
              <div className="w-full flex mt-4">
                {/* ADD EMOJI */}
                <div className=" ">
                  <input
                    type="text"
                    placeholder="Add emoji"
                    value={emojiInput}
                    onChange={handleEmojiInputChange}
                  />
                </div>
                {/* ADD MEDIA  */}
                <div className=" ">
                  <label className="cursor-pointer">
                    <input type="file" className="hidden" />
                    <span className="px-4 py-2 hover:bg-gray-200 rounded-md flex items-center gap-2">
                      <FontAwesomeIcon
                        className="text-[#378FE9] size-5"
                        icon={faImage}
                      />
                      Media
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*" // Accept only image files
                    onChange={handleMediaFileChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* DIVIDER */}
          <div className="border-b border-gray-300" />
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handlePost}
              disabled={!postContent}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
