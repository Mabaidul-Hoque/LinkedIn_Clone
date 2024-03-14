import React, { useEffect, useState } from "react";
import { Post } from "../../../pages/Home";
import {
  faRetweet,
  faCommentDots,
  faPaperPlane,
  faThumbsUp,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { likePost } from "../../../apis/postLikeApi";
import { toast } from "react-toastify";
import { createAComment } from "../../../apis/commentOnPostApi";

interface MGenCardProps {
  post: Post;
}

function toCapitalized(str: string): string {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

const MGenCard = React.forwardRef<HTMLDivElement, MGenCardProps>(
  ({ post }, ref) => {
    const [isLiked, setIsLiked] = useState(false);
    const [content, setContent] = useState("you are very handsome");

    const commentOnPost = async () => {
      const res = await createAComment(post._id, content);
      console.log("res from create a comment", res);
    };

    console.log("isLiked", isLiked);

    const likeAPost = async () => {
      const res = await likePost(post._id);
      if (res.status === "success") {
        setIsLiked(true);
        const likedPostsFromLS = JSON.parse(
          localStorage.getItem("likedPosts") || "[]"
        );
        console.log("likedPostsFromLS", likedPostsFromLS);
        const existedPostInLS = likedPostsFromLS.find(
          (item: string) => item === post._id
        );
        if (!existedPostInLS) {
          localStorage.setItem(
            "likedPosts",
            JSON.stringify([...likedPostsFromLS, post._id])
          );
        }
        toast.success(res.message, { theme: "colored" });
      } else {
        toast.error(res.message, { theme: "colored" });
      }
    };
    const handleLike = () => {
      likeAPost();
    };
    const calculateDaysAgo = (createdAt: string): number => {
      const currentDate = new Date();
      const postDate = new Date(createdAt);
      const diffInTime = currentDate.getTime() - postDate.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24);
      return Math.abs(Math.round(diffInDays));
    };

    return (
      <div ref={ref} className="bg-white  shadow-md rounded-md mb-4">
        {/* AUTHOR SECTION */}
        <div className="flex px-4 pt-2 mb-2">
          <div className="flex items-center gap-2">
            {/* AUTHOR IMage */}
            <img
              className="w-12 h-12 object-cover"
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
        <div className="px-1 xl:px-8 pt-2 pb-4 flex items-center justify-between">
          {/* LIKE */}
          <div
            onClick={handleLike}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md "
          >
            {JSON.parse(localStorage.getItem("likedPosts") || "[]").includes(
              post._id
            ) ? (
              <FontAwesomeIcon
                className="size-5 text-blue-500"
                icon={faThumbsUp}
              />
            ) : (
              <ThumbUpAltOutlinedIcon />
            )}
            <p className="hidden min-[450px]:block">Like</p>
          </div>
          {/* COMMENT */}
          <div
            onClick={commentOnPost}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            {/* <FontAwesomeIcon className="size-5" icon={faCommentDots} />
            <FontAwesomeIcon icon={faCommentDots} /> */}
            <FontAwesomeIcon icon={faComments} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
            </svg>
            <p className="hidden min-[450px]:block">Comment</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md">
            <FontAwesomeIcon className="size-5" icon={faRetweet} />
            <p className="hidden min-[450px]:block">Repost</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md">
            <FontAwesomeIcon className="size-5" icon={faPaperPlane} />
            <p className="hidden min-[450px]:block">Send</p>
          </div>
        </div>
      </div>
    );
  }
);

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
            } h-96`}
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
