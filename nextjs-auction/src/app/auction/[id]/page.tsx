import { auctionItem } from "@/lib/types";
import Image from "next/image";
import kia from "../../../public/Kia-1.jpg";

export default async function Page({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/api/auctions/${params.id}`);
    const post = await res.json();

    return (
        <div>
            {" "}
            <Image
                src={kia}
                alt="Cover Image"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                priority
            />
            <h1>
                {post.year} {post.make} {post.model}
            </h1>
            <p> {post.description}</p>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await fetch("http://localhost:3000/api/auctions").then(
        (res) => res.json(),
    );

    return posts.map((post: auctionItem) => ({
        id: post.id.toString(),
    }));
}
