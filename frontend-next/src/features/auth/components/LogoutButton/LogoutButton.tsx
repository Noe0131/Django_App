"use client";

import { useRouter } from "next/navigation";

import Styles from "./LogoutButton.module.css";

function Logout()  {

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        router.push("/Login")

        console.log("ログアウト実行中");
    }
    return (
        <div className={Styles.div}>
            <button className={Styles.button}  onClick={handleLogout}>ログアウト</button>
        </div>
    )

};

export default Logout