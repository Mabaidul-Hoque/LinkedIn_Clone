import React, { useEffect, useState } from "react";
import { Post } from "../../../pages/Home";
import {
  faRetweet,
  faCommentDots,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { likePost } from "../../../apis/postsApi/postLikeApi";
import { toast } from "react-toastify";
import Comment from "../comment/Comment";
import { fetchComments } from "../../../apis/displayCommentsApi";
import { calculateTimeAgo } from "../../../util/createdAt";
import PostEditOptions from "../../../ui/PostEditOptions";
import PostModal from "../../create-post/PostModal";
import { updateCreatedPost } from "../../../apis/postsApi/updatePostApi";
import { deleteAPost } from "../../../apis/postsApi/DeleteAPost";

interface MGenCardProps {
  post: Post;
}

export interface PostComment {
  content: string;
  createdAt: string;
  _id: string;
  children: PostComment[];
}

const MGenCard = React.forwardRef<HTMLDivElement, MGenCardProps>(
  ({ post }, ref) => {
    const [isLiked, setIsLiked] = useState(false);
    const [content, setContent] = useState("");
    const [comments, setComments] = useState<PostComment[]>([]);
    const [isCommentBtn, setIsCommentBtn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [newPostContent, setNewPostContent] = useState<string>("");
    const [newSelectedFiles, setNewSelectedFiles] = useState<File[] | null>([]);
    // const [editOption, setEditOption] = useState(false);

    useEffect(() => {
      getComments();
    }, []);

    const getComments = async () => {
      const res = await fetchComments(post._id);
      console.log("res from fetch comments", res);
      if (res.status === "success") {
        setComments(res?.data);
      }
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
    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const updatePost = async () => {
      const formData = new FormData();

      formData.append("content", newPostContent);
      if (newSelectedFiles) {
        // Append each image file to the formData
        for (let i = 0; i < newSelectedFiles.length; i++) {
          formData.append("images", newSelectedFiles[i]);
        }
      }
      const res = await updateCreatedPost(post._id, formData);
      console.log("res from update post", res);
      if (res?.status === "success") {
        toast.success(res?.message, { theme: "colored" });
      }
    };

    const deletePost = async () => {
      const res = await deleteAPost(post._id);
      if (res) {
        console.log("res from delete post", res);
      }
      toast.success("Post deleted successfully", { theme: "colored" });
    };

    return (
      <div ref={ref} className="bg-white  shadow-md rounded-md mb-4">
        {/* AUTHOR SECTION */}
        <div className="flex justify-between px-4 pt-2 mb-2">
          {/* AUTHOR DETAILS */}
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
              <p className="font-semibold">{post.author.name}</p>
              {/* AUTHOR FOLLOWERS */}
              <p className="text-sm">150,000 followers</p>
              {/* AUTHOR CREATED AT */}
              <p className="text-sm">
                {calculateTimeAgo(post.createdAt)} .
                <span className="pl-1">
                  {/* POST - VISIBILITY */}
                  <PublicIcon fontSize="inherit" htmlColor="gray" />
                </span>
              </p>
            </div>
          </div>
          {/* THREE DOT MENU */}
          <PostEditOptions onOpen={openModal} onDelete={deletePost} />
          {/* DISPLAY OPTION RESULTS */}

          <PostModal
            isOpen={isModalOpen}
            onClose={closeModal}
            setPostContent={setNewPostContent}
            postContent={newPostContent}
            createOrUpdatePost={updatePost}
            setSelectedFiles={setNewSelectedFiles}
            selectedFiles={newSelectedFiles}
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            postBtn="Save"
            updatedContent={post.content}
          />
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

        {/* LIKE/COMMENT COUNT DISPLAY SECTION */}
        <div className="px-4 pt-2 mb-2 flex items-center justify-between">
          <div className="flex"> 3,952 likes</div>
          <div className="flex items-center gap-2">
            {/* NUMBER OF COMMENTS */}
            <p className="">{comments.length} comments</p>
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
            onClick={() => setIsCommentBtn((prev) => !prev)}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            <FontAwesomeIcon
              className="size-5 text-gray-500"
              icon={faCommentDots}
            />
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
        {/* COMMENTS CREATION AND DISPLAY CONTANINER */}
        <div className={`${isCommentBtn ? "block" : "hidden"}`}>
          <Comment
            setContent={setContent}
            content={content}
            postId={post._id}
            comments={comments}
            setComments={setComments}
          />
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
