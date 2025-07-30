import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';

import styles from './Login.module.css'; 

// コンポーネントボタン
// import LoginButton from './components/Login_Button';


function Login() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    
    const handleLogin = async (error: React.FormEvent) => {
        error.preventDefault();
        
        const csrftoken = Cookies.get("csrftoken") || '';
        try {
            const response = await fetch("http://localhost:8000/api/login/", {
                method: "POST",
                
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                },
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                })
            });
            if (!response.ok) {
            // エラー処理
                console.error('Login failed with status:', response.status);
                return;
            }
            const data = await response.json();
            if (response.status === 200) {
                console.log('Login successful:', data);
                navigate('/'); 
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
         <div className={styles.login_Container}>
            <h2 className={styles.h2}>Login</h2>
            <form className={styles.senter} onSubmit={handleLogin}>
            {/* <form className={styles.senter}> */}
                <input
                    type="text"
                    className='login-input'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />
                <input
                    type="email"
                    className='login-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input 
                    type="password"
                    className='Login-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button type="submit">SUBMIT</button>
            </form>
            {/* <LoginButton onClick={() => console.log("クリックされました")}/> */}
        </div>
    );
}

export default Login;