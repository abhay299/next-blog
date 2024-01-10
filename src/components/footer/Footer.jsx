import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="https://www.linkedin.com/in/abhaygupta299/" target="_blank">
          Abhay Gupta
        </a>
      </div>
      <div className={styles.text}>
        <a
          href="https://abhay-gupta.netlify.app"
          target="_blank"
          style={{
            fontSize: "1rem",
            color: `var(--textSoft)`,
            letterSpacing: "0.2rem",
            fontWeight: "bold",
          }}
        >
          My Portfolio
        </a>
      </div>
    </div>
  );
};

export default Footer;
