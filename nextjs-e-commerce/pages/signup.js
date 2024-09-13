import styles from "../styles/login.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Link from "next/link";

export default function Signup(props) {
    const router = useRouter();

    const [regiserForm, setRegisterForm] = useState({
        email: "test@gmail.com",
        username: "test",
        password: "124",
    });
    const [badSignup, setBadSignup] = useState("");

    const [filled, setFilled] = useState(false);

    useEffect(() => {
        if (
            regiserForm.password == "" ||
            regiserForm.username == "" ||
            regiserForm.email == ""
        ) {
            setFilled(false);
        } else {
            setFilled(true);
        }
        console.log(filled);
    }, [setRegisterForm]);

    async function register(event) {
        event.preventDefault();
        if (!filled) return;

        try {
            const res = await fetch("http://localhost:3000/api/signup", {
                method: "POST",
                body: JSON.stringify(regiserForm),
                headers: {
                    "content-type": "application/json",
                },
            });
            console.log(res);
            if (res.ok) {
                router.push("/login");
            } else {
                console.log("NOOOOOO");
            }
        } catch (error) {
            console.log(error);
            setBadSignup(error);
        }

        setRegisterForm({
            email: "",
            username: "",
            password: "",
        });
    }

    function handleChange(event) {
        const { value, name } = event.target;
        setRegisterForm((prevNote) => ({
            ...prevNote,
            [name]: value,
        }));
    }

    let headerImage = { path: "/images/LoginHeader.jpg" };

    return (
        <Layout>
            <section>
                <Header {...headerImage} />
                <form className={styles.form}>
                    <label className={styles.label}>Username:</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        value={regiserForm.username}
                        autoComplete="username"
                        autoFocus="autofocus"
                        required="required"
                    />
                    <label className={styles.label}>Email:</label>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={regiserForm.email}
                        autoComplete="email"
                        required="required"
                    />

                    <label className={styles.label}>Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        autoComplete="current-password"
                        required="required"
                        value={regiserForm.password}
                    />

                    <input
                        type="button"
                        className={styles.buttonSubmit}
                        name="submit"
                        onClick={register}
                        disabled={!filled}
                        value={"Sign Up"}
                    />
                </form>
            </section>
        </Layout>
    );
}
