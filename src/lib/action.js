"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { dbConnetion } from "./utils";

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
