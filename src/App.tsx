import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "./Layout";
// import TokenAccess from "./components/TokenAccess";

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-4xl">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {/* <TokenAccess /> */}
      {isAuthenticated && <Layout />}
    </div>
  );
}

export default App;
