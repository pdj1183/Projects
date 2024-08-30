import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import Post from "../components/post";
import { loadPosts } from '../lib/load-posts'

export default function Home({ posts }) {
    console.log(posts)


    return (
        <Layout>
        <Head>
        <title>Phill's Pics</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <section className={styles.list}>
        { posts?.map((post) => (
            <Post key={post.id} {...post} />
        ))}
        </section>

        </Layout>
    );
}


export async function getStaticProps() {
    const posts = await loadPosts()
    return { props: { posts } }
}
