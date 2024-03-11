import React, { useState } from "react";
import { Post } from "../../../pages/Home";
import {
  faRetweet,
  faCommentDots,
  faGlobe,
  faThumbsUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
interface MGenCardProps {
  post: Post;
}

function toCapitalized(str: string): string {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

const MGenCard: React.FC<MGenCardProps> = ({ post }) => {
  const calculateDaysAgo = (createdAt: string): number => {
    const currentDate = new Date();
    const postDate = new Date(createdAt);
    const diffInTime = currentDate.getTime() - postDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return Math.abs(Math.round(diffInDays));
  };

  return (
    <div className="bg-white shadow-md rounded-md mb-4">
      {/* AUTHOR SECTION */}
      <div className="flex px-4 pt-2 mb-2">
        <div className="flex items-center gap-2">
          {/* AUTHOR IMage */}
          <img
            className="w-12 h-12 object-fill"
            src="https://static.vecteezy.com/system/resources/previews/010/056/184/original/people-icon-sign-symbol-design-free-png.png"
            alt="author_image"
          />
          {/* AUTHOR DETAILS */}
          <div className="flex flex-col text-left">
            {/* AUTHOR NAME */}
            <p className="font-semibold">{toCapitalized(post.author.name)}</p>
            {/* AUTHOR FOLLOWERS */}
            <p className="text-sm">150,000 followers</p>
            {/* AUTHOR CREATED AT */}
            <p className="text-sm">
              {calculateDaysAgo(post.createdAt)}d.
              <span className="pl-1">
                {/* POST - VISIBILITY */}
                <PublicIcon fontSize="inherit" htmlColor="gray" />
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* CONTENT SECTION */}
      <div className="text-left px-4 pt-2 mb-2">
        {/* POST TITLE */}
        <h2 className="">{post.title}</h2>
        {/* POST CONTENT */}
        <p>{post.content}</p>
      </div>
      {/* IMAGE SECTION */}
      {post?.images?.length > 0 &&
        (post?.images?.length === 1 ? (
          post.images.map((img, index) => (
            <img key={index} className="max-h-[70vh] w-full" src={img} />
          ))
        ) : (
          <ExpandingCards images={post?.images} />
        ))}

      {/* LIKE/COMMENT DISPLAY SECTION */}
      <div className="px-4 pt-2 mb-2 flex items-center justify-between">
        <div className="flex"> 3,952 likes</div>
        <div className="flex items-center gap-2">
          {/* NUMBER OF COMMENTS */}
          <p className="">32 comments</p>
          <div className="w-1 h-1 bg-gray-600 rounded-3xl"></div>
          {/* NUMBER SHARE */}
          <p className="">7 reposts</p>
        </div>
      </div>
      <div className="w-[95%] mx-auto border-b border-gray-300"></div>
      {/* LIKE/COMMENT/POST/SHARE CONATINER */}
      <div className="px-8 pt-2 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md ">
          {/* <FontAwesomeIcon className="size-5" icon={faThumbsUp} /> */}
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md">
          <FontAwesomeIcon className="size-5" icon={faCommentDots} />
          <p>Comment</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md">
          <FontAwesomeIcon className="size-5" icon={faRetweet} />
          <p>Repost</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md">
          <FontAwesomeIcon className="size-5" icon={faPaperPlane} />
          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

interface ExpandingCardsProps {
  images: string[];
}
const ExpandingCards: React.FC<ExpandingCardsProps> = ({ images }) => {
  const [activePanel, setActivePanel] = useState(0);
  return (
    <div className="mt-8">
      <div className="flex  gap-4">
        {images.map((image, index) => (
          <div
            onClick={() => setActivePanel(index)}
            key={index}
            className={`${
              activePanel === index
                ? "w-[32rem] transition-width duration-500"
                : "w-[5rem] transition-width duration-500"
            } h-96 relative`}
          >
            <img
              className={`${
                activePanel === index ? "" : "object-cover"
              } w-full h-full`}
              src={image}
              alt="images"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MGenCard;
