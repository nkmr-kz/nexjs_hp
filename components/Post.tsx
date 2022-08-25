import React from "react";
import Link from "next/link";
import { Post } from "../pages/api/posts";

type Props = {
    post: Post
}

const Post = (props:Props) => {
    return (
        <div>
            <span>{props.post.id}</span>
            {" : "}
            <Link href={`/posts/${props.post.id}`}>
                <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:border-blue-700">
                    {props.post.title}
                </span>
            </Link>
        </div>
    )
}

export default Post