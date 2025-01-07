import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

import LinkedIn from "../../../public/LinkedIn_logo_initials.png";
import Portfolio from "../../../public/portfolio-icon.svg";
import GitHub from "../../../public/Octicons-mark-github.svg";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <h1> Weather Blast </h1>
                <h1> Phillip Johnson </h1>
                <ul className={styles.socials}>
                    <li>
                        <Link
                            className={styles.social}
                            href="https://pdj1183.github.io/Personal-Portfolio/">
                            <Image src={Portfolio} alt="" width={25}></Image>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.social}
                            href="https://www.linkedin.com/in/phillip-johnson-5b7854262/">
                            <Image src={LinkedIn} alt="" width={25}></Image>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.social}
                            href="https://github.com/pdj1183">
                            <Image src={GitHub} alt="" width={25}></Image>
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    );
}
