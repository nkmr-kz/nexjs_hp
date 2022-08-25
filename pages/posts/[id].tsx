import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPost } from "../../lib/posts";
import { Post } from "../api/posts";

type Params = {
  id: number;
};

const Post = (props: { post: Post }) => {
  if (props.post == null) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={props.post.title}>
      <p className="m-4">
        {"ID : "}
        {props.post.id}
      </p>
      <p className="m-8 text-xl font-bold">{props.post.title}</p>
      <p className="px-10">{props.post.body}</p>

      <Link href="/posts">
        <div className="flex cursor-pointer mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </div>
      </Link>
    </Layout>
  );
};

export const getStaticPaths : GetStaticPaths= async () => {
  console.log("getStaticPaths");
  const Ids = await getAllPostIds();
  
  return {
    paths: Ids.map((id) => ({ params: { id } })),
    fallback: false, // falseにすると、存在しないページにアクセスした場合は404ページが表示される, trueにすると動的にページを生成する
  };
};

export const getStaticProps : GetStaticProps = async (context) => {
  console.log("getStaticProps")
  const post = await getPost(Number(context.params?.id));
  return {
    props: {
      post:post,
    },
  };
};

export default Post;