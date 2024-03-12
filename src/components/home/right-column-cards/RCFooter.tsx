import { Link } from "react-router-dom";

const lists = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Accessebility",
    link: "#",
  },
  {
    id: 3,
    title: "Help Center",
    link: "#",
  },
  {
    id: 4,
    title: "Privacy & Terms",
    link: "#",
  },
  {
    id: 5,
    title: "Ad Choices",
    link: "#",
  },
  {
    id: 6,
    title: "Advertsing",
    link: "#",
  },
  {
    id: 7,
    title: "bussiness Services",
    link: "#",
  },
  {
    id: 8,
    title: "Get the LinkedIn App",
    link: "#",
  },
  {
    id: 9,
    title: "More",
    link: "#",
  },
];

const RCFooter = () => {
  return (
    <div className="">
      <ul className="text-sm flex flex-wrap gap-2 items-center justify-center text-gray-500 p-8">
        {lists.map((listItem) => (
          <li key={listItem.id} className="hover:underline hover:text-blue-500">
            <Link to={listItem.link}>{listItem.title}</Link>
          </li>
        ))}
      </ul>
      {/* ON CLICK OF MORE BOTTOM FOOTER WILL APPEAR IN MODAL TRY LATER */}
      <div className="flex items-center justify-between px-3">
        <img
          className="w-16"
          src="/LinkedIn_logo_footer.svg"
          alt="linkedin_footer_logo"
        />
        <span className="text-[12px]">LinkedIn Corporation © 2024</span>
      </div>
    </div>
  );
};

export default RCFooter;
