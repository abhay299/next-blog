import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// Fetch Data with an API
// const getPostData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   // cache: "no-store" will re-fetch the data from database. It is useful if your databse is being
//   // updated frequently.
//   // next:{revalidate: 300}, this is another option to re-fetch data periodically after a given time
//   // in seconds (in this case 5minutes)

//   if (!response.ok) throw new Error("Something went wrong!");

//   return await response.json();
// };

export const metadata = {
  title: "Blog Page",
  description: "Blogs of all the users",
};

const BlogPage = async () => {
  // Fetch Data with an API
  // const posts = await getPostData();

  // Fetch Data wihtout an API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
