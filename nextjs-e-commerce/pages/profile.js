import Layout from "../components/layout";
import styles from "../styles/Profile.module.css";
import useToken from '../lib/useToken';
import { useState, useEffect } from "react";
import { useRouter } from "next/router.js";

export default function Profile(props) {
    const [info, setInfo] = useState({
        email: "",
        username: "",
    });
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const sendRequest = async () => {
            const res = await fetch("http://localhost:3000/api/profile", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.ok) {
                const json = await res.json();
                setInfo(json);
                console.log(json);
            } else {
                router.push("/login");
            }
        };
        sendRequest();
    }, []);

    return (
        <Layout>
            <section className={styles.profile}>
                <h1 className={styles.title}>Welcome To i.take.pics.outsie!</h1>
                <section className={styles.infoBox}>
                    <p className={styles.info}>
                        Your Username: {info.username}
                    </p>
                    <p className={styles.info}>Your Email: {info.email}</p>
                </section>
            </section>
        </Layout>
    );
}
