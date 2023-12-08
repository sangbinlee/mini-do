import { prisma } from "@/lib/db";
import { envVariables } from "@/lib/env";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";




export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GitHubProvider({
        clientId:envVariables.GITHUB_CLIENT_ID,
        clientSecret:envVariables.GITHUB_CLIENT_SECRET,   
        allowDangerousEmailAccountLinking: true,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        allowDangerousEmailAccountLinking: false,
      }),
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID as string,
        clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
        allowDangerousEmailAccountLinking: false,
      }),
      NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID!,
        clientSecret: process.env.NAVER_CLIENT_SECRET!,
        allowDangerousEmailAccountLinking: true,
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





    // session:{
    //   strategy:"jwt",
    //   maxAge: 30 * 24 * 60 * 60, //30일
    // },
    // secret: process.env.NEXTAUTH_SECRET,







      
    callbacks: {
      //4. jwt 만들 때 실행되는 코드
      //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
      jwt: async ({ token, user }: any) => {
        if (user) {
          token.user = {}
          token.user.name = user.name
          token.user.email = user.email
          token.user.image = user.image
        }
        console.log('★★★★★★★★★★★★★★★★★★★★★token', token);
        return token
      },
      //5. 유저 세션이 조회될 때 마다 실행되는 코드
      async session({ session, token }: any) {
        // Send properties to the client, like an access_token and user id from a provider.
        session.user = token.user
        session.providerType = token.providerType
        return session
      },
    },
    // pages: {
    //   signIn: "/",
    // },
    debug: process.env.NODE_ENV === "development",
    secret: process.env.NEXTAUTH_SECRET,
  };