import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getPostData = async (slug) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`
//   );

//   if (!response.ok) throw new Error("Something went wrong!");

//   return await response.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SingleBlogPost = async ({ params }) => {
  // console.log("URL Parameters::", params);
  const { slug } = params;

  // Fetch Data with an API
  // const post = await getPostData(slug);

  // Fetch Data without an API
  const post = await getPost(slug);
  // console.log("POST =>", post);

  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post?.img} alt="userPost" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.userDetail}>
            <span className={styles.userTitle}>Published</span>
            <span className={styles.userValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
