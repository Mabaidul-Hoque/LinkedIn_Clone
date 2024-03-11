import Lcard2 from "../components/home/left-column-cards/LCard2";
import Lcard1 from "../components/home/left-column-cards/Lcard1";
import MGenCard from "../components/home/middle-column-cards/MGenCard";
import MTopCard from "../components/home/middle-column-cards/MTopCard";
import RCard1 from "../components/home/right-column-cards/RCard1";
import RCard2 from "../components/home/right-column-cards/RCard2";

const Home = () => {
  const leftColumnCards = [
    { title: "Card 1", content: <Lcard1 /> },
    { title: "Card 2", content: <Lcard2 /> },
  ];
  const middleColumnCards = [
    { title: "Card 1", content: <MGenCard /> },
    { title: "Card 2", content: <MGenCard /> },
    { title: "Card 3", content: <MGenCard /> },
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
        {middleColumnCards.map((card, index) => (
          <div key={index}>{card.content}</div>
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
