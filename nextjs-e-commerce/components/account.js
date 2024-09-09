import styles from "./account.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Dropdown(props) {
  let [login, setLogin] = useState(false);

  return (
    <section className={styles.dropdown}>
      
        <Link href="/login">Login</Link>
          </section>
  );
}

export default function Account() {
  return (
    <section className={styles.account}>
      <div className={styles.icon}>PERSON</div>
      <br/>
      <Dropdown />
    </section>
  );
}
