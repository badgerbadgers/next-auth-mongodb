import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { connectDB } from "@/utils/database"
import googleAuthUser from "@/models/googleAuthUser"
// import GoogleUser from "@/models/googleAuthUser"
// import { signIn } from "next-auth/react"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await googleAuthUser.findOne({
        email: session.user.email,
      })
      return session
    },

    async signIn({ profile }) {
      console.log(profile)
      try {
        await connectDB()

        const userExist = await googleAuthUser.findOne({ email: profile.email })

        if (!userExist) {
          const user = await googleAuthUser.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          })
        }
        return true

        console.log()
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
})
// console.log('handler', handler)

export { handler as GET, handler as POST }
