import Image from 'next/image';
import styles from './header.module.css'
import headerImage from '../public/images/GreyRockHeader.jpg'

export default function Header() {

    return (
        <section className={styles.header}>

            <Image src={headerImage} alt='Header' sizes='100vw' placeholder="blur"/>
            <h1 className={styles.title} >
                I Take Pics Outside
            </h1>

        </section>
    );
}

