import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout';
import Image from 'next/image';
import Header from '../components/header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Post from '../components/post';
import List from '../components/list';



export default function Home() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                setMessage(data.posts);
                setLoading(false);
            })
    }, [])
    console.log(message)
  return (
    <Layout >
      <Head>
        <title>Phill's Pics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </Layout>

  );
}
