// import Credentials from "next-auth/providers/credentials"
// import type { NextAuthConfig } from "next-auth"

// export default {
//   providers: [
//     Credentials({
//       // Provide a placeholder function for Edge use (middleware)
//       authorize() {
//         return null // No DB access in Edge
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/login",
//   },
//   session: {
//     strategy: "jwt", // required for Edge compatibility
//   },
// } satisfies NextAuthConfig

import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

const authConfig: NextAuthConfig = {
  providers: [
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
