"use client"
import { signOut } from "next-auth/react"
 
export default function SignOut() {
  return <button  className="btn btn-light" onClick={() => signOut()}>Sign Out</button>
}