import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [
    Credentials({
      // Provide a placeholder function for Edge use (middleware)
      authorize() {
        return null // No DB access in Edge
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt", // required for Edge compatibility
  },
} satisfies NextAuthConfig
