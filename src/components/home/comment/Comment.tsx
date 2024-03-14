import React from "react";
import EmojiSelector from "../../../ui/EmojiSelector";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface CommentProps {
  setContent: (content: string | ((prev: string) => string)) => void;
  content: string;
}
const Comment: React.FC<CommentProps> = ({ setContent, content }) => {
  //   const setContent = (content: string) => {
  //     // Your logic to set the content
  //   };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const addEmoji = (emoji: string) => {
    setContent((prev) => prev + emoji);
  };
  return (
    <div className="px-1 xl:px-6 pt-2 pb-4">
      {/* CREATE A COMMENT */}
      <div className="flex items-center gap-2 xl:gap-4 relative">
        {/* PROFILE IMAGE */}
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          alt="User Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        {/* CREATE A COMMENT INPUT */}
        <input
          type="text"
          value={content}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          className="flex-grow px-2 py-1 pl-4 pr-28 border border-gray-500 rounded-full min-w-20 min-h-10 overflow-auto focus:outline-blue-500 hover:bg-gray-100"
        />
        {/* EMOJI SELECTOR */}
        <div className="absolute top-0 right-6 flex items-center">
          <EmojiSelector addEmoji={addEmoji} />
        </div>
        {/* IMAGE FILE */}
        <label className="cursor-pointer absolute top-2 right-6">
          <input type="file" className="hidden" />
          <FontAwesomeIcon className="text-[#378FE9] size-6" icon={faImage} />
        </label>
      </div>

      {/* DISPLAY COMMENTS */}
      <div className=""></div>
    </div>
  );
};

export default Comment;
