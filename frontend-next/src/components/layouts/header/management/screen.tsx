import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import styles from "./screen.module.css";

function Screen() {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();


  useEffect(() => {
    const csrftoken = Cookies.get("csrftoken") || '';

    fetch("http://localhost:8000/accounts/user_info/", {
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
      setUsername(data.username || "No Username");
      console.log("f", data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>
        <div className={styles.user}>{username? username.slice(0,2) : "Loading..."}</div>
    </div>
  )
}

export default Screen;

