'use client'

import { useState } from "react";
import Link from "next/link";

import Cookies from 'js-cookie';

//css
import styles from "./Register.module.css";


function Register() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleRigister = async (event: React.FormEvent) => {
        event.preventDefault();

        const csrftoken = Cookies.get("csrftoken") || '';
        try {
            const response = await fetch("http://localhost:8000/accounts/register/", {
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
            }
        } catch (error){
            console.error("Register error",error);
        }
    };
    
    return (
        <div >
            <h1 className={styles.h1}>アカウント制作</h1>
            <form className={styles.senter} onSubmit={handleRigister}>
            <label htmlFor='username' className={styles.label}>名前を入力してください</label>
                <input
                    type="username"
                    className={styles['Rigister_input']}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
            <label htmlFor='email' className={styles.label}>メールアドレスを入力してください</label>
                <input
                    type="email"
                    className={styles['Rigister_input']}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
            <label htmlFor='password' className={styles.label}>パスワードを入力してください</label>
                <input
                    type="password"
                    className={styles['Rigister_input']}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password" 
                />
                <button type="submit" className={styles.rigister_button}>クリック</button>
                <p className={styles.p}>アカウントを既にお持ちですか?<Link href="/Login" className={styles.login}>ログイン</Link></p>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

export default Register;