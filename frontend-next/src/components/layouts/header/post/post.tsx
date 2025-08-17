import Link from "next/link";

import Styles from "./post.module.css";

function Post() {

    return (
        <div>
            <Link href="/Product">
                <button className={Styles.button}>投稿する</button>
            </Link>
        </div>
    )
}

export default Post;