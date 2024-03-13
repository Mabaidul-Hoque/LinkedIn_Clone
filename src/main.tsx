import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./PageRoutes.tsx";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.VITE_AUTH0_DOMAIN;
// const clientId = process.env.VITE_AUTH0_CLIENT_ID;

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

if (!domain || !clientId) {
  throw new Error(
    "Auth0 domain and client ID must be set in the environment variables."
  );
}

const auth0ClientOptions = {
  redirectUri: window.location.origin,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} {...auth0ClientOptions}>
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
