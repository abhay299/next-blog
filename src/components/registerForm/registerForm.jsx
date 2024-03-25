"use client";
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder=" Enter username" name="username" />
      <input type="email" placeholder=" Enter email" name="email" />
      <input type="password" placeholder=" Enter password" name="password" />
      <input
        type="password"
        placeholder=" Repeat password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}

      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
