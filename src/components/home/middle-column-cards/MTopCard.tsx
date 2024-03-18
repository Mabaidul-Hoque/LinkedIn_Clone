import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EventsCreation from "../../create-post/EventsCreation";
import { useEffect, useState } from "react";
import PostModal from "../../create-post/PostModal";
import { createAPost } from "../../../apis/createAPostApi";

interface ContentItems {
  title: string;
  content: string;
  files: File[] | null;
}

const MTopCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentItems, setContentItems] = useState<ContentItems>({
    title: "",
    content: "",
    files: null,
  });
  const [postContent, setPostContent] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  console.log("selectedFile", selectedFiles);
  useEffect(() => {
    setContentItems({
      title: "title",
      content: postContent,
      files: selectedFiles,
    });
  }, [postContent]);

  const createPost = async () => {
    const res = await createAPost(contentItems);
    console.log("res from create a post", res);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      {/* CREATE POST HEADER */}
      <div className="flex items-center gap-2 xl:gap-4">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          alt="User Profile"
          className="w-14 h-14 rounded-full cursor-pointer"
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
          createPost={createPost}
          setSelectedFiles={setSelectedFiles}
          selectedFiles={selectedFiles}
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
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
        <EventsCreation />
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
