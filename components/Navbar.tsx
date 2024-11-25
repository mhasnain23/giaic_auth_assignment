"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar flex bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Hasnain developer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 capitalize">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>about</Link>
          </li>
          <li>
            <Link href={"#"}>contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn bg-gray-900 text-white/80"
          onClick={() => router.push("/signin")}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
