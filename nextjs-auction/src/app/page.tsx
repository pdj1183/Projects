"use client";
import Auction from "./auction/page";
import styles from "./page.module.css";
import { auctionItem } from "@/lib/types";


export default function Home() {

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>
                    <h1> Test Stuff</h1>
                    <Auction />

                </div>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}
