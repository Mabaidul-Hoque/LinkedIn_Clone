import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useState } from "react";
import { Post } from "../../../pages/Home";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";
import { EventsCreation, PostModal } from "../../create-post";

interface MTopCardProps {
  updatePosts: React.Dispatch<React.SetStateAction<Post[]>>;
  setPostContent: React.Dispatch<React.SetStateAction<string>>;
  postContent: string;
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[] | null>>;
  selectedFiles: File[] | null;
  createPost: () => Promise<void>; // Adjust the return type as necessary
}
const MTopCard: React.FC<MTopCardProps> = ({
  setPostContent,
  postContent,
  setSelectedFiles,
  selectedFiles,
  createPost,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [postContent, setPostContent] = useState<string>("");
  // const [selectedFiles, setSelectedFiles] = useState<File[] | null>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  // const getPosts = async () => {
  //   const res = await fetchPosts(1);
  //   console.log("res from posts", res);
  //   if (res?.status === "success") {
  //     updatePosts((prevPosts) => [...prevPosts, ...res?.data]);
  //   }
  // };

  // const createPost = async () => {
  //   const formData = new FormData();

  //   formData.append("content", postContent);
  //   if (selectedFiles) {
  //     // Append each image file to the formData
  //     for (let i = 0; i < selectedFiles.length; i++) {
  //       formData.append("images", selectedFiles[i]);
  //     }
  //   }
  //   const res = await createAPost(formData);
  //   console.log("res from create a post", res);
  //   getPosts();
  //   // updatePosts((prev) => [res.data, ...prev]);
  //   // if (res?.status === "success") {
  //   //   console.log("res from post created");
  //   //   getPosts();
  //   //   // Assuming res.data contains the new post data
  //   //   // updatePosts((prevPosts) => [res.data, ...prevPosts]);
  //   // }
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigation = () => {
    navigate(`/in/${user._id}`);
  };
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      {/* CREATE POST HEADER */}
      <div className="flex items-center gap-2 xl:gap-4">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          alt="User Profile"
          className="w-14 h-14 rounded-full cursor-pointer"
          onClick={handleNavigation}
        />
        <input
          type="text"
          placeholder="Start a post"
          onClick={openModal}
          className="flex-grow px-2 py-1 pl-8 border rounded-full min-w-20 h-12 focus:outline-blue-500 hover:bg-gray-100"
        />
        <PostModal
          isOpen={isModalOpen}
          onClose={closeModal}
          setPostContent={setPostContent}
          postContent={postContent}
          createOrUpdatePost={createPost}
          setSelectedFiles={setSelectedFiles}
          selectedFiles={selectedFiles}
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
          postBtn="Post"
          updatedContent={""}
        />
      </div>
      {/* UPLOADED OPTIONS */}
      <div className="flex items-center justify-center gap-4 sm:justify-between flex-wrap mt-6 xl:mt-2 px-0 sm:px-6">
        {/* IMAGE FILE */}
        <label className="cursor-pointer">
          <input type="file" className="hidden" />
          <span className="px-4 py-2 hover:bg-gray-200 rounded-md flex items-center gap-2">
            <FontAwesomeIcon className="text-[#378FE9] size-5" icon={faImage} />
            Media
          </span>
        </label>

        {/* EVENT */}
        <div>
          <EventsCreation />
        </div>
        {/* WRITE FILE */}
        <button
          onClick={() => toast.info("Coming soon...!", { theme: "colored" })}
          className="px-4 py-2 rounded-md flex items-center gap-1 hover:bg-gray-200"
        >
          <EditNoteIcon htmlColor="#E06847" />
          <span>Write article</span>
        </button>
      </div>
    </div>
  );
};

export default MTopCard;
