"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
    return (
        <button
            onClick={() => signIn("github")}
            className="btn btn-light" >
            <Image
                src="/github-mark.svg"
                alt="GitHub"
                width={20}
                height={20}
                style={{ marginRight: "1rem" }}
            />
            Sign in with GitHub
        </button>
    )
}