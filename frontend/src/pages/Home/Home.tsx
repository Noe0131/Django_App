import { useEffect, useState } from "react";
import Logaut from "./components/Logout/logout";

function Home() {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  useEffect(() => {
    fetch("http://localhost:8000/api/user_info/", {
      method: "GET",
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
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your application.</p>
      <div>
        {username ? <p>こんにちは {username}</p> : <p>ローディング...</p>}
        {email ? <p> メール {email}</p> : <p>ローディング...</p>}
        {password ? <p>pass {password}</p> : <p></p>}
      </div>
      <Logaut />
    </div>
  );
}

export default Home;
