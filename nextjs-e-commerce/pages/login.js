import styles from "../styles/login.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Link from "next/link";

export default function Login(props) {
    const router = useRouter();

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        if (loginForm.password == "" || loginForm.username == "") {
            setFilled(false);
        } else {
            setFilled(true);
        }
    }, [loginForm]);

    async function login(event) {
        event.preventDefault();

        if (!filled) return;

        try {
            const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                body: JSON.stringify(loginForm),
                headers: {
                    "content-type": "application/json",
                },
            });
            console.log(res);
            if (res.ok) {
            } else {
                console.log("Bad");
            }
        } catch (error) {
            console.log(error);
        }

        setLoginForm({
            username: "",
            password: "",
        });
    }

    function handleChange(event) {
        const { value, name } = event.target;
        setLoginForm((prevNote) => ({
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
                        value={loginForm.username}
                        autoComplete="username"
                        autoFocus="autofocus"
                        required="required"
                    />
                    <div className={styles.group}>
                        <label className={styles.label}>Password:</label>
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            autoComplete="current-password"
                            required="required"
                            value={loginForm.password}
                        />
                        <Link className={styles.buttonForgot} href="/Forgot">
                            Forgot Password
                        </Link>
                    </div>
                    <div className={styles.group}>
                        <input
                            type="button"
                            className={styles.buttonSubmit}
                            name="submit"
                            onClick={login}
                            disabled={!filled}
                            value={"Sign In"}
                        />
                        <p className={styles.signupText}>
                            Not a member?
                            <br />
                            <Link href={"/signup"}>Signup</Link>
                        </p>
                    </div>
                </form>
            </section>
        </Layout>
    );
}
