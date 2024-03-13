// import { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// export function tokenAccess() {
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

//   return accessToken;
//   // <div>
//   //   {accessToken ? (
//   //     <div>
//   //       <h2>Access Token</h2>
//   //       <p>{accessToken}</p>
//   //     </div>
//   //   ) : (
//   //     <div>Loading access token...</div>
//   //   )}
//   // </div>
// }

// // export default TokenAccess;
