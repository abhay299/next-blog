"use client";
import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error && <p style={{ color: "red" }}>{state?.error}</p>}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
