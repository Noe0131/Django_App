import React, { useEffect, useState } from "react";

function HelloMessage() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/hello/")
      .then((response) => response.json())
      .then((data) => {
        console.log("sss",data);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("エラーが発生しました:", error);
      });
  }, []);

  return (
    <div>
      <h2>APIからのメッセージ</h2>
      <p>{message}</p>
    </div>
  );
}

export default HelloMessage;