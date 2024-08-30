import { Post } from "../models/post.model"
import styles from "./list.module.css"

export default function List({ posts }) {
    return(
        <section className={styles.list}>
        { posts?.map((post) => (
            <Post key={post.id} {...post} />
        ))}
        </section>
    )


}
