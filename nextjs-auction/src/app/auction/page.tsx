"use client";
import { auctionItem } from "@/lib/types";
import { useEffect, useState } from "react";
import styles from "./auction.module.css";
import PostThumb from "@/components/postThumb";


export default function Auction() {
    const [data, setData] = useState<auctionItem[]>([]);
    const [now, setNow] = useState<string>(Date())



    const intervalID = setInterval(() => {
        setNow(Date)
    }, 1000);



    useEffect(() => {
        async function fetchAuctions() {
            const res = await fetch("http://localhost:3000/api/auctions");
            const data = await res.json();
            setData(data);
            console.log(data);
        }
        fetchAuctions();
    }, []);

    return (
        <div className={styles.center}>
            <div className={styles.gallery}>
                {data.map((post) => (
                    <PostThumb key={post.id} post={post} time={now} />
                ))}
            </div>
        </div>
    );
}
