import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },   
    providers: [Google],
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //         // user.test = "tets"
    //         return true
    //     },
    //     async redirect({ url, baseUrl }) {
    //         return baseUrl
    //     },
    //     async session({ session, user, token }) {
    //         return session
    //     },
    //     async jwt({ token, user, account, profile, isNewUser }) {
            
    //         return token
    //     }
    // }
})