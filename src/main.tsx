import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./PageRoutes.tsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // </React.StrictMode>
);
