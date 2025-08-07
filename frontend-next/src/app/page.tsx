import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

//コンポーネント
import LoginPage from "./Login/page";

export default function Home() {

  return (
    <div>
      <LoginPage />
    </div>
  );
}
