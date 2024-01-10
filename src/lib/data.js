//Temporary Data

import { Post, User } from "./models";
import { dbConnetion } from "./utils";

// const users = [
//   { id: 1, name: "Hitesh" },
//   { id: 2, name: "sassy" },
//   { id: 3, name: "kirveh" },
//   { id: 4, name: "duggu" },
// ];

export const getPosts = async () => {
  try {
    dbConnetion();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log("Error::", err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    dbConnetion();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log("Error::", err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    dbConnetion();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log("Error::", err);
    throw new Error("Failed to fetch user detail!");
  }
};

export const getAllUsers = async () => {
  try {
    dbConnetion();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log("Error::", err);
    throw new Error("Failed to fetch users!");
  }
};
