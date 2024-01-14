import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { User } from "./models";
import { dbConnetion } from "./utils";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    dbConnetion();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("Incorrect Credentials!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Incorrect Credentials!");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = login(credentials);
          return user;
        } catch (error) {
          console.log("No User Found!");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log(profile);
      if (account.provider === "github") {
        dbConnetion();
        try {
          const user = await User.findOne({
            email: profile.email,
          });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              avatar: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
