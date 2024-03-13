import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "@mui/material";
import { useAuth } from "../contexts/AuthProvider";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileDropdown() {
  const { logout } = useAuth();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex flex-col justify-center items-center text-gray-600 hover:text-black cursor-pointer">
          <FontAwesomeIcon className="w-6 h-6" icon={faCircleUser} />
          <span className="text-[12px] max-[800px]:hidden">
            Me <FontAwesomeIcon className="w-3 h-3" icon={faCaretDown} />
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* MENU HEADER */}
          <div className="py-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                {/* PROFILE IMAGE */}
                <img
                  className="w-20 h-20"
                  src="/user-profile-icon.webp"
                  alt="profile_logo"
                />
                {/* PROFILE HEADINGS */}
                <div className="">
                  {/* NAME */}
                  <h4 className="font-semibold">MABAIDUL HOQUE</h4>
                  {/* DESCRIPTION */}
                  <p className="text-sm">
                    Passionate Full Stack Developer | Expertise in Frontend
                    Technologies | Continuous Learner & Problem Solver
                  </p>
                </div>
              </div>
              {/* VIEW PROFILE BTN */}
              <Menu.Item>
                <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out w-full rounded-xl ">
                  View Profile
                </button>
              </Menu.Item>
            </div>
            {/* DIVIDER */}
            <Divider sx={{ mb: 1, mt: 1 }} />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Try Premium
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm w-full text-left"
                  )}
                >
                  Dark Mode / Light Mode
                </button>
              )}
            </Menu.Item>
            {/* DIVIDER */}
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  onClick={logout}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
