import styles from './post.module.css'
import Image from 'next/image';

export default function Post(post) {
    let pathname = post.path
    console.log(pathname)
    return (
        <section className={styles.postBox}>
            <h1 className={styles.title}>{post.title}</h1>


            <Image 
                className={styles.postImage} 
                src={pathname} 
                alt='test' 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                fill={true}
            />


            <h2 className={styles.description}>{post.description}</h2>


        </section>
    )
}
