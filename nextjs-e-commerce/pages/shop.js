import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/Home.module.css"

export default function Shop() {
    let post = {id: 1, title: 'test', description: 'Long Description', path: '/images/Post-1.jpg'}
    return(
        <Layout>
            <h1>Shop</h1>
            <section  >
                <Post {...post}/>
            </section>

        </Layout>
    );
}
