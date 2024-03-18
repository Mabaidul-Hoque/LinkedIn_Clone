interface PostBody {
  title?: string;
  content: string;
  files?: File[] | null;
}

export async function createAPost(body: PostBody) {
  try {
    const token = localStorage.getItem("token");
    const url = "https://academics.newtonschool.co/api/v1/linkedIn/post/";
    console.log("body.title before append:", body);
    const formData = new FormData();
    console.log("formData: BEfore", formData);

    formData.append("title", body.title || "");
    formData.append("content", body.content);
    if (body.files) {
      // Append each image file to the formData
      for (let i = 0; i < body.files.length; i++) {
        formData.append("images", body.files[i]);
      }
    }
    console.log("formData: After", formData);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "i1dieevrt9g1",
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
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
