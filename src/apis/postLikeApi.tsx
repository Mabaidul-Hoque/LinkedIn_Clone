// import { tokenAccess } from "../components/TokenAccess";

export async function likePost(postId = "", accessToken = "") {
  try {
    const url = `https://academics.newtonschool.co/api/v1/linkedin/like/${postId}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer  ${accessToken}`,
        projectID: "i1dieevrt9g1",
      },
    });
    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error-->", error.message);
    } else {
      console.log("Error-->", error);
    }
  }
}
