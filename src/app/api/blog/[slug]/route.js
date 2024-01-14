import { Post } from "@/lib/models";
import { dbConnetion } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  // console.log("SLUG =====> ", { slug });
  try {
    await dbConnetion();

    // const post = await Post.findOne({ slug });
    const post = await Post.aggregate([
      {
        $match: {
          slug,
        },
      },
    ]);
    console.log("BackEnd Response", post);
    return NextResponse.json(post);
  } catch (err) {
    console.log("Error =>", err);
    throw new Error("Failed to fetch post!");
  }
};

// export const DELETE = async (request, { params }) => {
//   const { slug } = params;
//   // console.log("SLUG =====> ", { slug });
//   try {
//     dbConnetion();

//     await Post.deleteOne({ slug });
//     return NextResponse.json("Post deleted");
//   } catch (err) {
//     console.log("Error =>", err);
//     throw new Error("Failed to delete post!");
//   }
// };
