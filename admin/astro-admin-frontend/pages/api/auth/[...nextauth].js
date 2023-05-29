import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import jwt from 'jsonwebtoken';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRE
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch("http://localhost:3001/auth/login", {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    })
                    const response = await res.json()
                    if (res.status == 200 && response) {
                        return response
                    }
                    return null
                } catch (error) {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },

        async redirect({ url, baseUrl }) {
            return baseUrl + '/dashboard'
        },
        async session({ session, user, token }) {
            session.user = token
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (!isNewUser) {
                const authUser = await prisma.user.findFirst({
                    where: { email: token.email },
                });
                delete authUser.password;
                const sessionToken = jwt.sign({ userId: authUser.id, email: authUser.email}, process.env.NEXTAUTH_SECRET, { expiresIn: "36h" })
                if (token) {
                    token.sessionToken = sessionToken;
                    user = { ...user, ...authUser }
                }
            } else {
                await prisma.user.update({ where: { email: token.email }, });

            }
            return { ...token, ...user };
        }
    },
    pages: {
        signIn: "/",
    }
};

export default NextAuth(authOptions);