'use client';

import React, { useState,} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Cookies from 'js-cookie';

//css
import styles from "./Login.module.css";



function Login() {
    const router = useRouter();


    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
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
                router.push("/Home")
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
         <div className={styles.login_Container}>
            <h1 className={styles.h1}>SpotnBuy</h1>
            <form className={styles.senter} onSubmit={handleLogin}>
            {/* <form className={styles.senter}> */}
            <label htmlFor='email' className={styles.label}>メールアドレス</label>
                <input
                    type="email"
                    className={styles['login_input']}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='メールアドレス'
                />
            <label htmlFor='password' className={styles.label}>パスワード</label>
                <input 
                    type="password"
                    className={styles['login_input']}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='パスワード'
                />
                <button type="submit" className={styles.login_button}>ログイン</button>
                <p className={styles.p}>ご利用は初めてですか?<Link href="/register" className={styles.register}>アカウント作成へ</Link></p>
            </form>
        </div>
    );
}

export default Login;
