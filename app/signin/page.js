"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
      >
        Sign in with Google
      </button>
    </div>
  );
}
