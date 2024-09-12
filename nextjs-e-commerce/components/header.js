import Image from "next/image";
import styles from "./header.module.css";

export default function Header(image) {
    let pathname = image.path;
    console.log(pathname);
    return (
        <section className={styles.header}>
            <Image
                priority={true}
                className={styles.headerImage}
                src={pathname}
                alt="Header"
                fill={true}
            />

            <h1 className={styles.title}>I Take Pics Outside</h1>
        </section>
    );
}
