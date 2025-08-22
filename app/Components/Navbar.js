"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import DreamCarsLogo from "./DreamCarsLogo";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/browse-cars">Browse Cars</Link>
      </li>
      {status !== "loading" && session?.user?.role === "owner" && (
        <li>
          <Link href="/owner/list-car">List a Car</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <DreamCarsLogo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {status === "loading" ? (
          <span className="btn loading btn-ghost">Loading</span>
        ) : session?.user ? (
          <div className="flex items-center space-x-2">
            {session.user.image && (
              <img
                src={session.user.image}
                alt={session.user.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="hidden sm:inline">{session.user.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn btn-outline bg-red-500 shadow-none btn-sm"
            >
              Sign Out
            </button>
          </div>
        ) : (
          // Redirect to /signin page
          <button
            onClick={() => router.push("/signin")}
            className="btn bg-red-500 hover:bg-red-600 border-none shadow-none text-white "
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
