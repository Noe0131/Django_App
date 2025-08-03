import { useNavigate } from "react-router-dom"

function Logaut()  {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate("/login");

        console.error("ddd", handleLogout);
    }
    return (
        <div>
            <button onClick={handleLogout}>ログアウト</button>
        </div>
    )

};

export default Logaut