  import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const authConfig: NextAuthConfig = {
  providers: [
    Google,
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
       authorize() {
        return null; // No DB access in Edge
      },
    }),
  ],
  session: {
    strategy: "jwt", // Required for Edge compatibility
  },
  pages: {
    signIn: "/auth/login",
  },
}


export default authConfig
