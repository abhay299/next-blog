"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { dbConnetion } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

// export const sayHello = async () => {
//   "use server";
//   console.log("Hello from server");
// };
export const addPost = async (formData) => {
  // console.log("Form Data =>", Object.fromEntries(formData));
  // Returns an object created by key-value entries for properties and methods

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  // console.log(title, slug, userId);

  try {
    dbConnetion();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("***SAVED TO DB***");
    revalidatePath("/blog");
  } catch (error) {
    console.error("Error: ", error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  // console.log("Form Data =>", Object.fromEntries(formData));
  // Returns an object created by key-value entries for properties and methods

  const { id } = Object.fromEntries(formData);
  // console.log(title, slug, userId);

  try {
    dbConnetion();

    await Post.findByIdAndDelete(id);
    console.log("***DELETED FROM DB***");
    revalidatePath("/blog");
  } catch (error) {
    console.error("Error: ", error);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, passwordRepeat, avatar } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Password does not match!" };
  }

  try {
    dbConnetion();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar,
    });

    await newUser.save();
    console.log("saved to db!");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};
