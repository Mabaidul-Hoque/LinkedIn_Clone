import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import MyNetwork from "./pages/MyNetwork.tsx";
import Jobs from "./pages/Jobs.tsx";
import Home from "./pages/Home.tsx";
import Messaging from "./pages/Messaging.tsx";
import Notifications from "./pages/Notifications.tsx";
import Login from "./pages/Login.tsx";
import { RouterProvider } from "react-router-dom";

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/feed",
          element: <Home />,
        },
        {
          path: "/mynetwork",
          element: <MyNetwork />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/messaging",
          element: <Messaging />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
      ],
    },
    {
      path: "/signin",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default PageRoutes;
