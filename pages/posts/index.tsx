import { GetStaticProps } from "next"
import React from "react"
import Layout from "../../components/Layout"
import Post from "../../components/Post"
import {getAllPosts} from "../../lib/posts"
import { Post as PostType } from "../api/posts"

type Props = {
  allPosts: PostType[],
}

const Blog = (props:Props) => {
  return (
   <Layout title="Blog">
      <ul className="m-10">
        {props.allPosts.length != 0 && props.allPosts.map((post:PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
   </Layout>
  ) 
}

export default Blog

// getStaticProps はビルド時に一度のみ実行される
export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts
    }
  }
}