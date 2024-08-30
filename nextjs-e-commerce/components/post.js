import styles from './post.module.css'
import Image from 'next/image';

export default function Post(post) {
    let pathname = post.path
    console.log(pathname)
    return (
        <section className={styles.postBox}>
            <h1>{post.title}</h1>

            <br/>

            <Image className={styles.postImage} src={pathname} alt='test' fill={true}/>

            <br/>

            <h2>{post.description}</h2>


        </section>
    )
}
