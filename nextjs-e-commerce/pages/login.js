import styles from "../styles/login.module.css";

export default function Login(props) {

    return (
        <section >
            <form>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password" />
                <button>Forgot Password</button>
                <button>Submit</button>




            </form>
        </section>
    )
}
