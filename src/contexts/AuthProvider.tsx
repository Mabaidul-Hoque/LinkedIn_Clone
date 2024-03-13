// import { useEffect, useState, useContext } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { createContext } from "vm";

// const AuthContext = createContext();
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("AuthContext is undefined");
//   }
//   return context;
// };

// const AuthProvider = ({ children }) => {
//   const { getAccessTokenSilently } = useAuth0();
//   const [accessToken, setAccessToken] = useState<string | undefined>();

//   useEffect(() => {
//     const getToken = async () => {
//       try {
//         const token = await getAccessTokenSilently();
//         setAccessToken(token);
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     getToken();
//   }, [getAccessTokenSilently]);
//   return (
//     <AuthContext.Provider value={{ accessToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
