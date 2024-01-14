import Image from "next/image";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

// Fetch DATa with an API
// const getData = async (userId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!response.ok) throw new Error("Something went wrong!");

//   return await response.json();
// };

const PostUser = async ({ userId }) => {
  // Fetch Data with an API
  // const user = await getData(userId);
  console.log("USER ID ===>", userId);
  // Fetch Data without an API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user?.avatar ?? "/noavatar.png"}
        alt="avatar"
        width={50}
        height={50}
      />
      <div className={styles.authorDetail}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
