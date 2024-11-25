"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignOut() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen text-center mt-20">
      <h1 className="text-4xl tracking-tight font-bold mb-6">Sign Out</h1>
      {/* <button onClick={() => signOut()}>Sign Out your account</button> */}
      <button
        onClick={() => signOut()}
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-2 items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <Image
          src={"/git.svg"}
          alt="github"
          width={16}
          height={16}
          className="invert"
        />
        Sign Out your account
      </button>{" "}
      <div>
        <button className="btn btn-info rounded-lg mt-2">
          <Link href={"/"}>Go Home</Link>
        </button>
        {/* <button className="btn btn-success">Success</button> */}
      </div>
    </div>
  );
}
