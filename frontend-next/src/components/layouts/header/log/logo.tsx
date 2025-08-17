import Image from "next/image";
import Link from "next/link";

import styles from "./logo.module.css";
function Logo() {
    return (
        <Link href={"/Home"} className={styles.logo}>
            <span className={styles.span}>SpotnBuy</span>
            <Image
                src="/log/logo.png"
                className={styles.image}
                width={45}
                height={25}
                alt="logo"
                priority
            />
        </Link>
    )
}

export default Logo;