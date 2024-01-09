import Image from "next/image";
import styles from "./singlePost.module.css";

const SingleBlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/15820754/pexels-photo-15820754/free-photo-of-man-silhouette-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="singlePost"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/users/avatars/309493370/nazila-azimzada-847.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2"
            alt="avatar"
            width={50}
            height={50}
          />
          <div className={styles.userDetail}>
            <span className={styles.userTitle}>Author</span>
            <span className={styles.userValue}>Nazila Azimzada</span>
          </div>
          <div className={styles.userDetail}>
            <span className={styles.userTitle}>Published</span>
            <span className={styles.userValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum wodoajdoia dahsdahduai hdiaushdaisouhdaf78gre
          gdfadfhugpuhgadsufh
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
