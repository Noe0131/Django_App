
import styles from "./header.module.css";

import Logo from "./log/logo";


function Wholeheader() {

    return (
        <div className={styles.conteier}>
            <header>
                 <Logo />
            </header>
        </div>
    )
}

export default Wholeheader;