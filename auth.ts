// import NextAuth from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"
// import Credentials from "next-auth/providers/credentials"
// import bcrypt from "bcryptjs"
// import { getUserByEmail } from "./data/user"
// import authConfig from "./auth.config"

// const prisma = new PrismaClient()

// export const { auth, handlers, signIn, signOut } = NextAuth({
//   ...authConfig, // bring in session/pages/etc.
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const { email, password } = credentials ?? {}
//         if (!email || !password) return null

//         const user = await getUserByEmail(email)
//         if (!user || !user.password) return null

//         const isValid = await bcrypt.compare(password, user.password)
//         if (!isValid) return null

//         return user
//       },
//     }),
//   ],
// })


import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

import authConfig from "./auth.config"
import { getUserByEmail } from "./data/user"

const prisma = new PrismaClient()

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials ?? {}
        if (!email || !password) return null

        const user = await getUserByEmail(email)
        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) return null

        return user
      },
    }),
  ],
  // (optional) You can override or expand the session config here
  session: {
    strategy: "jwt", // Safe default
  },
})
