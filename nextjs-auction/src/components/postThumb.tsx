import { auctionItem, timeRemaining } from "@/lib/types";
import styles from "./postThumb.module.css";
import Link from "next/link";
import Image from "next/image";
import kia from "../public/Kia-5.jpg";
import { useEffect, useState } from "react";
import { countdownTimer } from "@/lib/ticker";

export default function PostThumb(props: any) {

    const [ticker, setTicker] = useState<string>(countdownTimer(props.post.end, props.time));


    useEffect(() => {
        setTicker(countdownTimer(props.post.end, props.time));
    }, [props.time]);

    return (
        <div className={styles.thumb}>
            <Link href={"/auction/" + props.post.id}>
                <Image
                    src={kia}
                    alt="Cover Image"
                    sizes="100vw"
                    className={styles.image}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    priority
                />
                <h3 className={styles.banner}>
                    <div id="clock" /> {ticker} Bid $100
                </h3>
            </Link>
            <Link href={"/auction/" + props.post.id} className={styles.title}>
                {props.post.year} {props.post.make} {props.post.model}
            </Link>
            <p className={styles.description}> {props.post.description}</p>
        </div>
    );
}
