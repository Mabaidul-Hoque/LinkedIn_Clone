import React, { useState, useEffect, useRef } from "react";
import EmojiSelector from "../../../ui/EmojiSelector";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createAComment } from "../../../apis/commentOnPostApi";
import { PostComment } from "../middle-column-cards/MGenCard";
import { calculateTimeAgo } from "../../../util/createdAt";
import { customUsers } from "../../../data/userInfo";
import { useAuth } from "../../../contexts/AuthProvider";
interface CommentProps {
  setContent: (content: string | ((prev: string) => string)) => void;
  content: string;
  postId: string;
  comments: PostComment[];
  setComments: (
    comments: PostComment[] | ((prev: PostComment[]) => PostComment[])
  ) => void;
}
const Comment: React.FC<CommentProps> = ({
  setContent,
  content,
  postId,
  comments,
  setComments,
}) => {
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isPosted, setIsPosted] = useState(false);
  const [visibleComments, setVisibleComments] = useState<PostComment[]>([]);
  const { user } = useAuth();
  const [isCommentText, setIsCommentText] = useState(true);
  const [expandedCommentId, setExpandedCommentId] = useState<string | null>(
    null
  );
  // const commentContentRef = useRef<HTMLParagraphElement>(null);
  // useEffect(() => {
  //   if (commentContentRef.current) {
  //     const contentHeight = commentContentRef.current.scrollHeight;

  //     const maxHeight = 100; // Assuming 1 unit of height is 4px, adjust as needed
  //     console.log("contentHeight", {
  //       contentHeight,
  //       maxHeight,
  //       commentContentRef,
  //     });
  //     setIsCommentText(contentHeight <= maxHeight);
  //   }
  // }, [content, commentContentRef, isCommentText]);

  useEffect(() => {
    setVisibleComments(comments.slice(0, 4));
  }, [comments]);

  const loadMoreComments = () => {
    const currentVisibleCount = visibleComments.length;
    const nextVisibleCount = Math.min(currentVisibleCount + 4, comments.length);
    setVisibleComments(comments.slice(0, nextVisibleCount));
  };

  useEffect(() => {
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;
      setTextAreaHeight(`${scrollHeight}px`);
    }
  }, [content]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (textAreaRef.current) {
      setTextAreaHeight("auto");
      const scrollHeight = textAreaRef.current.scrollHeight;
      setTextAreaHeight(`${scrollHeight}px`);
    }
  };

  const addEmoji = (emoji: string) => {
    setContent((prev) => prev + emoji);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setContent((prev) => prev + `\n![Image](${reader.result})`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isPosted) {
      setContent("");
    }
  }, [isPosted]);

  const handleCreatePost = () => {
    createAPost();
    setIsPosted(true);
  };
  const createAPost = async () => {
    const res = await createAComment(postId, content);
    console.log("res from create post", res);
    if (res.status === "success") {
      setComments((prevData: PostComment[]) => [res.data, ...prevData]);
    }
  };

  return (
    <div className="px-2 min-[450px]:px-4  xl:px-6 pt-2 pb-4">
      {/* CREATE A COMMENT */}
      <div className="flex gap-2 xl:gap-4 relative">
        {/* PROFILE IMAGE */}
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          alt="User Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        {/* CREATE A COMMENT INPUT */}
        <div className="flex flex-col gap-2 w-11/12 sm:w-full">
          <textarea
            ref={textAreaRef}
            value={content}
            onChange={handleCommentChange}
            onFocus={() => setIsPosted(false)}
            placeholder="Add a comment"
            className={`flex-grow px-2 py-1 pl-4 pr-24 border border-gray-500 rounded-2xl min-w-20 min-h-10 overflow-hidden focus:outline-blue-500 hover:bg-gray-100 ${textAreaHeight}`}
            style={{ height: textAreaHeight }}
          />
          <button
            onClick={handleCreatePost}
            className={`w-12 bg-blue-500 px-2 py-1 text-white rounded-md hover:bg-blue-600 ${
              content.length >= 1 && !isPosted ? "block" : "hidden"
            }`}
          >
            Post
          </button>
        </div>
        {/* EMOJI SELECTOR */}
        <div className="absolute top-0 right-6 flex items-center">
          <EmojiSelector addEmoji={addEmoji} />
        </div>
        {/* IMAGE FILE */}
        <label className="cursor-pointer absolute top-2 right-6">
          <input type="file" className="hidden" onChange={handleFileChange} />
          <FontAwesomeIcon className="text-[#378FE9] size-6" icon={faImage} />
        </label>
      </div>

      {/* DISPLAY COMMENTS */}
      <div className="mt-4">
        {/* COMMENTS */}
        <div>
          <div className="flex flex-col gap-6">
            {visibleComments.map((comment, index) => (
              <div key={index} className="flex gap-4">
                {/* PROFILE IMAGE */}
                <img
                  src={`${
                    index === 0
                      ? customUsers[0].imageUrl
                      : index === 1
                      ? customUsers[1].imageUrl
                      : index === 2
                      ? customUsers[2].imageUrl
                      : index === 3
                      ? customUsers[3].imageUrl
                      : index === 4
                      ? customUsers[4].imageUrl
                      : index === 5
                      ? customUsers[5].imageUrl
                      : index === 6
                      ? customUsers[6].imageUrl
                      : index === 7
                      ? customUsers[7].imageUrl
                      : index === 8
                      ? customUsers[8].imageUrl
                      : index === 9
                      ? customUsers[9].imageUrl
                      : customUsers[10].imageUrl
                  }`}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <div className="w-full text-left bg-gray-100 p-3 rounded-md">
                  <div className="flex flex-col ">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <h2 className="font-semibold mr-2">{user.name}</h2>
                        <p className="text-gray-600">• 3rd+</p>
                      </div>
                      {/* POSTED TIME */}
                      <p>{calculateTimeAgo(comment.createdAt)}</p>
                    </div>
                    <p className="text-[12px]">
                      Digital Marketer & Researcher Empowering young individuals
                      to harness
                    </p>
                  </div>
                  <div className="">
                    <p
                      className={`text-[15px] ${
                        isCommentText || comment._id !== expandedCommentId
                          ? "overflow-y-hidden max-h-24"
                          : "overflow-visible"
                      }`}
                    >
                      {comment.content}
                    </p>
                    <div
                      className={`flex justify-end ${
                        isCommentText || comment._id !== expandedCommentId
                          ? ""
                          : "hidden"
                      }`}
                    >
                      <button
                        onClick={() => {
                          setIsCommentText(false);
                          setExpandedCommentId(comment._id);
                        }}
                      >
                        see more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Load more comments */}
        {comments.length !== visibleComments.length && (
          <div className="flex justify-start mt-4">
            <button
              className="hover:bg-gray-200 rounded-md px-3 py-1"
              onClick={loadMoreComments}
            >
              Load more comments
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
