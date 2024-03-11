import { faHashtag, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const groups = [
  {
    id: 1,
    title: "Frontend Developers - HTML, CSS, JavaScript",
  },
  {
    id: 2,
    title:
      "Full Stack Developer Community - (Frontend & Backend | WEB3 | NFT | Crypto) IT Professional",
  },
  {
    id: 3,
    title:
      "Web Developers, Magento, Wordpress, PHP, Frontend/Backend developer",
  },
  {
    id: 4,
    title: "Frontend Developer and Web Developers",
  },
  {
    id: 5,
    title: "Artificial Intelligence, Machine Learning, Data Science & Robotics",
  },
];

const events = [
  {
    id: 1,
    title: "education",
  },
  {
    id: 2,
    title: "engineering",
  },
  {
    id: 3,
    title: "bussiness",
  },
  {
    id: 4,
    title: "robotics",
  },
  {
    id: 5,
    title: "gaming",
  },
];

const Lcard2 = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md mb-4 flex flex-col gap-4">
        {/* RECENT EVENTS/GROUP VIEWED  */}
        <div className="px-4 pt-4">
          <h2 className="font-semibold text-left">Recent</h2>
        </div>
        {/* GROUPS */}
        <div className="flex flex-col gap-2 px-4">
          <h2 className="font-semibold text-left text-blue-500">Groups</h2>
          {groups.map((group) => (
            <div key={group.id} className="flex items-center gap-2 text-sm">
              <FontAwesomeIcon className="text-gray-800" icon={faPeopleGroup} />
              <p className="overflow-hidden whitespace-nowrap truncate">
                {group.title}
              </p>
            </div>
          ))}
        </div>
        {/* EVENTS */}
        <div className="flex flex-col gap-2 px-4">
          <h2 className="font-semibold text-left text-blue-500">Events</h2>
          {events.map((event) => (
            <div key={event.id} className="flex items-center gap-2 text-sm">
              <FontAwesomeIcon icon={faHashtag} />
              <p className="overflow-hidden whitespace-nowrap truncate">
                {event.title}
              </p>
            </div>
          ))}
        </div>
        <div>
          {/* DIVIDER */}
          <div className="border-b border-gray-300" />
          {/* DISCOVER MORE */}
          <div className="hover:bg-gray-300 cursor-pointer py-2">
            Discover more
          </div>
        </div>
      </div>
    </>
  );
};

export default Lcard2;
