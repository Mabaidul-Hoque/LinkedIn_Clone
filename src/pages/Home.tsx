import { useEffect, useState } from "react";
import { fetchPosts } from "../apis/postsApi";
import Lcard2 from "../components/home/left-column-cards/LCard2";
import Lcard1 from "../components/home/left-column-cards/Lcard1";
import MGenCard from "../components/home/middle-column-cards/MGenCard";
import MTopCard from "../components/home/middle-column-cards/MTopCard";
import RCard1 from "../components/home/right-column-cards/RCard1";
import RCard2 from "../components/home/right-column-cards/RCard2";

interface Author {
  name: string;
  _id: string;
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  author: Author;
  // or
  // author: {
  //   name: string;
  // }
  createdAt: string;
  commentCount: number;
  isDisliked: boolean;
  isLiked: boolean;
  likeCount: number;
  images: string[];
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const res = await fetchPosts();
    console.log("res from posts", res);
    if (res?.status === "success") {
      setPosts(res?.data);
    }
  };

  console.log("posts", posts);

  const leftColumnCards = [
    { title: "Card 1", content: <Lcard1 /> },
    { title: "Card 2", content: <Lcard2 /> },
  ];
  const rightColumnCards = [
    { title: "Card 1", content: <RCard1 /> },
    { title: "Card 2", content: <RCard2 /> },
  ];

  return (
    <div className="w-[95%] xl:w-[82%] mx-auto grid grid-cols-4 gap-4">
      {/* LEFT COLUMN CONTAINER */}
      <div className="col-span-1">
        {leftColumnCards.map((card, index) => (
          <div key={index}>{card.content}</div>
        ))}
      </div>
      {/* MIDDLE COLUMN CONTAINER */}
      <div className="col-span-2">
        <MTopCard />
        {posts?.map((post) => (
          <div key={post._id}>
            <MGenCard post={post} />
          </div>
        ))}
      </div>
      {/* RIGHT COLUMN CONTAINER */}
      <div className="col-span-1">
        {rightColumnCards.map((card, index) => (
          <div key={index}>{card.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
