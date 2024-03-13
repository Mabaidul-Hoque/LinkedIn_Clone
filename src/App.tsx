import Layout from "./Layout";
import { useAuth } from "./contexts/AuthProvider";
import Login from "./pages/Login";

function App() {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated", isAuthenticated);

  return <div>{isAuthenticated ? <Layout /> : <Login />}</div>;
}

export default App;
