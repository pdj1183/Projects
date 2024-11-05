"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { ContactList } from "./components/contacts/contact-list";
import { chatContext } from "./lib/chat-context";

export default function Home() {
const contacts: string[] = ["Tom", "Jim", "Bob"];
const [selected, setSelected] = useState<number>(0);
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <chatContext.Provider value={{selected, setSelected, contacts}}>
                    <ContactList />

                </chatContext.Provider>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}
