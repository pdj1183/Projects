import styles from "./account.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import account from "../public/images/person-square.svg";

export function Dropdown(props) {
    let [login, setLogin] = useState(false);

    return (
        <section className={styles.dropdown}>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
        </section>
    );
}

export default function Account() {
    return (
        <section className={styles.account}>
            <Image className={styles.icon} src={account} width={30} height={30} alt="Logo" />
            <br />
            <Dropdown />
        </section>
    );
}
