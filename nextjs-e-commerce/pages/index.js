import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import Post from "../components/post";
import { loadPosts } from "../lib/load-posts";

export default function Home({ posts }) {
    console.log(posts);

    const [selector, setSelector] = useState("all");

    let headerImage = { path: "/images/HomeHeader.jpg" };
    return (
        <Layout>
            <Head>
                <title>Phill's Pics</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header {...headerImage} />
            <section className={styles.list}>
                <div className={styles.selector}>
                    <button
                        className={`${selector == "all" ? `${styles.active}` : ""} ${styles.button}`}
                        onClick={() => {
                            setSelector("all");
                        }}>
                        All
                    </button>
                    <button
                        className={
                            `${selector == "beach" ? `${styles.active}` : ""} ${styles.button}`
                        }
                        onClick={() => {
                            setSelector("beach");
                        }}>
                        Beach
                    </button>
                    <button
                        className={
                            `${selector == "forest" ? `${styles.active}` : ""} ${styles.button}`
                        }
                        onClick={() => {
                            setSelector("forest");
                        }}>
                        Forest
                    </button>
                    <button
                        className={
                            `${selector == "mountains" ? `${styles.active}` : ""} ${styles.button}`
                        }
                        onClick={() => {
                            setSelector("mountains");
                        }}>
                        Mountains
                    </button>
                    <button
                        className={`${selector == "top" ? `${styles.active}` : ""} ${styles.button}`}
                        onClick={() => {
                            setSelector("top");
                        }}>
                        Top Pics
                    </button>
        <div className={styles.divider}/>
                </div>
                {posts?.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await loadPosts();
    return { props: { posts } };
}
