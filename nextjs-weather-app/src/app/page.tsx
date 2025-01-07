import Footer from "./components/Footer";
import styles from "./page.module.css";

import Form from "next/Form";


export default async function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <form action={"/search"}>
                    <input name="location" />
                    <button type="submit"> Search </button>
                </form>
            </main>
            <Footer />
        </div>
    );
}
