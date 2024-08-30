import Image from 'next/image';
import styles from './header.module.css'
import headerImage from '../public/images/GreyRockHeader.jpg'

export default function Header() {

    return (
        <section className={styles.header}>

            <Image className={styles.headerImage} src={headerImage} alt='Header'  placeholder="blur"/>
            <h1 className={styles.title} >
                I Take Pics Outside
            </h1>

        </section>
    );
}

