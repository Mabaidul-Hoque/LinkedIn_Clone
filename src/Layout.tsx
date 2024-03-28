import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar } from "./components";
// import { useAuth } from "./contexts/AuthProvider";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  // useEffect(() => {
  //   if () {
  //     toast.success(`Welcome back`, {
  //       theme: "colored",
  //     });
  //   }
  // }, []);
  return (
    <div className="">
      {/* NAVBAR */}
      <nav className="text-center w-full h-14 flex items-center justify-between mb-4 bg-[#FFFFFF] sticky top-0 dark:bg-black z-100">
        <Navbar handleMenu={handleMenu} menu={menu} />
      </nav>
      {/* MAIN  */}
      <main className="text-center w-full m-auto min-h-[calc(100vh-3.5rem)]">
        {pathname === "/" ? <Home /> : <Outlet />}
      </main>
      {/* Footer */}
      <footer className="text-center w-full bg-[#FFFFFF]">
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Layout;
