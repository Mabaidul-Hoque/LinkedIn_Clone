import Layout from "./Layout";
import { useAuth } from "./contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./ui/Loading";

function App() {
  const { isAuthenticated, setIsAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("toekn in app", token);

    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  if (loading) {
    return <Loading />;
  }

  return <div>{isAuthenticated ? <Layout /> : <Loading />}</div>;
}

export default App;
