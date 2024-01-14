import { register } from "@/lib/action";
import styles from "./register.module.css";
// import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <RegisterForm /> */}
        <form action={register}>
          <input type="text" placeholder=" Enter username" name="username" />
          <input type="email" placeholder=" Enter email" name="email" />
          <input
            type="password"
            placeholder=" Enter password"
            name="password"
          />
          <input
            type="password"
            placeholder=" Enter password again"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
