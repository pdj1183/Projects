"use client";

import styles from "./contacts.module.css";

interface ContactProps {
    name: string;
    selected: boolean;
}

export function Contact({ name, selected }: ContactProps) {
    return (
        <h1 className={` ${styles.contact} ${selected ? styles.selected : styles.normal}`}>
            {name}
        </h1>
    );
}
