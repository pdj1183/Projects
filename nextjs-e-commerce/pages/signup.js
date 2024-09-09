import { cache, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "../styles/login.module.css";
import { resolve } from "styled-jsx/css";
import { redirect } from "next/dist/server/api-utils";

export default function Signup(props) {
    const router = useRouter();
    const [regiserForm, setRegisterForm] = useState({
        email: "test@gmail.com",
        username: "test",
        password: "124",
    });
    const [badSignup, setBadSignup] = useState('')

    async function register(event) {
        event.preventDefault();

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
                router.push('/login')
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

    return (
        <section>
            <form>
                <input
                    onChange={handleChange}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={regiserForm.username}
                />
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={regiserForm.email}
                />
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={regiserForm.password}
                />
                <button onClick={register}>Submit</button>
                <p>{badSignup}</p>

            </form>
        </section>
    );
}
