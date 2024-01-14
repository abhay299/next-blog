import { Post } from "@/lib/models";
import { dbConnetion } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    dbConnetion();

    const posts = await Post.find();
    console.log("BLOG res", posts);
    return NextResponse.json(posts);
  } catch (err) {
    console.log("Error =>", err);
    throw new Error("Failed to fetch posts!");
  }
};
