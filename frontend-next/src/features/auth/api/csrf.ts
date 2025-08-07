// csrfトークンを取得するためのAPIエンドポイント

import Csrftoken from "@/components/csrftoken/Csrftoken";

export const getCsrfToken = async (): Promise<{ csrfToken: string}> => {
  const response = await fetch("http://localhost:8000/api/csrf/", {
    method: "GET",
    credentials: "include",
  });
    if (!response.ok) {
    throw new Error("CSRF トークンの取得に失敗しました");
  }
  const data = await response.json();
  return {csrfToken: data.csrfToken};
};


export default getCsrfToken;