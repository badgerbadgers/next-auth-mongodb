"use client"
// import { connectDB } from "@/utils/database"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  // const db = connectDB()
  return (
    <section>
      <h1>Home Page</h1>
      <h2>sign with google</h2>
      <button onClick={() => signIn("google")}>sign in</button>
      <button onClick={() => signOut("google")}>sign out</button>
    </section>
  )
}
