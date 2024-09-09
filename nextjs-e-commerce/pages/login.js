import styles from "../styles/login.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(props) {
    const router = useRouter();

    const [loginForm, setLoginForm] = useState({
        username: "test",
        password: "test-password",
    });

    async function login(event) {
        event.preventDefault();

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
                console.log("Logged in");
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

    return (
        <section>
            <form>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} value={loginForm.username}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={loginForm.password}/>
                <button>Forgot Password</button>
                <button onClick={login}>Submit</button>
            </form>
        </section>
    );
}
