'use client'


// Headersコンポーネント全体
import * as index from "@/components/index";

//コンポーネント
import ListProduct from "@/features/Home/components/Home";
// import useCsrfToken from "@/features/auth/hooks/useCsrfToken";
import Logout from "@/features/auth/components/LogoutButton/LogoutButton";


function Home() {

  return (
    <div>
      <index.Wholeheader/>
      <index.Screen/>
      <index.Post />
      <Logout />
      <ListProduct />
    </div>
  );
}

export default Home;


