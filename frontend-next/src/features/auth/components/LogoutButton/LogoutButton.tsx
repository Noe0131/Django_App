"use client";

import { useRouter } from "next/navigation";

function Logout()  {

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        router.push("/Login")

        console.log("ログアウト実行中");
    }
    return (
        <div>
            <button onClick={handleLogout}>ログアウト</button>
        </div>
    )

};

export default Logout