import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = async () => {
  // const session = await auth();
  // Gives the user's login session data
  // console.log("Session: ", session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button>Login with GitHub</button>
        </form>
        <span style={{ margin: "20px" }}>OR</span>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
