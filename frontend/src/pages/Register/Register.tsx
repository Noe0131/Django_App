import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';

function Register() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleRigister = async (event: React.FormEvent) => {
        event.preventDefault();

        const csrftoken = Cookies.get("csrftoken") || '';
        try {
            const response = await fetch("http://localhost:8000/api/register/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                },
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            if (!response.ok) {
                console.log("Register ", response.status);
                return;
            }
            const data = await response.json();

            console.log(response);
            
            
            if (response.status === 200) {
                console.log("Register success", data);
                setMessage("アカウント作成成功しました");
                navigate("/login");
            }
        } catch (error){
            console.error("Register error",error);
        }
    };
    
    return (
        <div >
            <h1>アカウント制作</h1>
            <form onSubmit={handleRigister}>
                <input
                    type="text"
                    className=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
                <input
                    type="text"
                    className=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    type="text"
                    className=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password" 
                />
                <button type="submit">
                    クリック
                    </button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

export default Register;