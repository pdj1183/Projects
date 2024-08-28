import styles from './post.module.css'
import Image from 'next/image';

import headerImage from '../public/images/GreyRockHeader.jpg'
export default function Post(props) {
    let pathname = props.post.path
    console.log(pathname)
    return (
        <section className={styles.postBox}>
            <h1>{props.post.title}</h1>
            <Image src={pathname} alt='test' sizes='100vw' width={0} height={0} placeholder="blur"/>

            <h2>{props.post.description}</h2>


        </section>
    )
}
