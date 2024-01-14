import { handleGithubLogin, login } from "@/lib/action";
import React from "react";

const LoginPage = async () => {
  // const session = await auth();
  // Gives the user's login session data
  // console.log("Session: ", session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
      <form style={{ color: "black" }} action={login}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
