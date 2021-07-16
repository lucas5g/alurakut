import NextAuth from "next-auth";
import Providers from "next-auth/providers";
const baseUrl = 'http://localhost'

const options = {
    providers: [

        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        // async signIn(user, account, profile) { return true },
        async redirect(url, baseUrl) { return baseUrl },
        // async session(session, user) { return session },
        // async jwt(token, user, account, profile, isNewUser) { return token }
    },
}

export default (req, res) => NextAuth(req, res, options)