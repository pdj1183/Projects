import styles from "./account.module.css";
import Link from "next/link";
import Image from "next/image";
import account from "../public/images/person-square.svg";

export function Dropdown() {
    return (
        <section className={styles.dropdown}>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/profile">Your Account</Link>
        </section>
    );
}

export default function Account() {
    return (
        <section className={styles.account}>
            <Link href="/profile">
                <Image
                    className={styles.icon}
                    src={account}
                    width={30}
                    height={30}
                    alt="Logo"
                />
            </Link>
            <br />
            <Dropdown />
        </section>
    );
}
