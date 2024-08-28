import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';

export const siteTitle = 'Phill\' Great Commerce';

export default function Layout({ children }) {
  return (
      <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Ecomerce Site"
            />
            <meta name="og:title" content={siteTitle} />
        </Head>
      <Navbar/>
      <div className={styles.container}>
        <main>
            {children}
        </main>
      </div>
      </>
  );
}
