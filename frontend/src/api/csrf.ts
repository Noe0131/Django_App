// csrfトークンを取得するためのAPIエンドポイント

export const getCsrfToken = async () => {
  await fetch("http://localhost:8000/api/csrf/", {
    method: "GET",
    credentials: "include", 
  });
};


export default getCsrfToken;