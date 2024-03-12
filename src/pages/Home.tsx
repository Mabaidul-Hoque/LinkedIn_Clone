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
  const [page, setPage] = useState(1);
  // const observer = useRef<IntersectionObserver | null>(null);
  // const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const res = await fetchPosts(20, page);
    console.log("res from posts", res);
    if (res?.status === "success") {
      console.log("inside if");
      setPosts((prevPosts) => [...prevPosts, ...res?.data]);
    }
    // else {
    //   setHasMore(false);
    // }
  };

  // const lastPostElementRef = (node: HTMLElement | null) => {
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting && hasMore) {
  //       setPage((prevPageNumber) => prevPageNumber + 1);
  //     }
  //   });
  //   if (node) observer.current.observe(node);
  // };
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  console.log("posts", posts);

  const leftColumnCards = [
    { title: "Left col profile card", content: <Lcard1 /> },
    { title: "Left col events card", content: <Lcard2 /> },
  ];
  const rightColumnCards = [
    { title: "Right col linkedin news", content: <RCard1 /> },
    { title: "Right col linkedin ad", content: <RCard2 /> },
  ];

  return (
    <div className="w-[95%] xl:w-[82%] mx-auto grid grid-cols-4 gap-8">
      {/* LEFT COLUMN CONTAINER */}
      <div className="col-span-1">
        {leftColumnCards.map((card, index) => (
          <div key={index}>{card.content}</div>
        ))}
      </div>
      {/* MIDDLE COLUMN CONTAINER */}
      <div className="col-span-2 mb-12">
        {/* CREATE A POST */}
        <MTopCard />
        {/* DISPLAY POSTS */}
        {posts?.map((post, index) => (
          <div key={post._id}>
            {posts.length === index + 1 ? (
              <MGenCard
                // ref={lastPostElementRef}
                post={post}
              />
            ) : (
              <MGenCard post={post} />
            )}
          </div>
        ))}
        {/* LOAD MORE POSTS */}
        <button
          // ref={loadMoreRef}
          onClick={handleLoadMore}
          className="border border-green-500 rounded-full px-4 py-1 hover:bg-green-400 hover:text-white w-[50%] mt-5"
        >
          Load more posts
        </button>
      </div>
      {/* RIGHT COLUMN CONTAINER */}
      <div className="col-span-1">
        {rightColumnCards.map((card, index) => (
          <div className={`${index === 1 && "sticky top-20"}`} key={index}>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
