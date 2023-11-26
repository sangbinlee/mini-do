import { prisma } from "@/lib/db";
import { envVariables } from "@/lib/env";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GitHubProvider({
        clientId:envVariables.GITHUB_CLIENT_ID,
        clientSecret:envVariables.GITHUB_CLIENT_SECRET,   
      }),
      // google OAuth
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      // 일반 회원가입/로그인
      // CredentialsProvider({
      //   name: "credentials",
      //   credentials: {
      //     email: { label: "email", type: "text" },
      //     password: { label: "password", type: "password" },
      //   },
      //   async authorize(credentials) {
      //     // 생략
      //   },
      // }),
    ],
    // pages: {
    //   signIn: "/",
    // },
    // debug: process.env.NODE_ENV === "development",
    session:{
      strategy:"jwt"
    },
    // secret: process.env.NEXTAUTH_SECRET,
  };