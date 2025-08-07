'use client'

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

//コンポーネント
// import useCsrfToken from "@/features/auth/hooks/useCsrfToken";
import Logout from "@/features/auth/components/LogoutButton/LogoutButton";

function Home() {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();


  useEffect(() => {
    const csrftoken = Cookies.get("csrftoken") || '';

    fetch("http://localhost:8000/api/user_info/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
         'X-CSRFToken': csrftoken,
      },
      credentials: "include",
    })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch user info");
      return res.json();
    })
    .then((data) => {
      setUsername(data.username);
      setEmail(data.email);
      setPassword(data.password)
      console.log("f", data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>
        <h2>fffff</h2>
        <p>{username}</p>
        <Logout />
    </div>
  );
}

export default Home;
