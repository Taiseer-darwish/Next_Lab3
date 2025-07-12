import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="min-h-screen relative">
          <Link
            href="/adduser/add"
            className=" absolute  right-0 buttom-0 px-4 py-2 text-sm  text-white bg-black rounded-lg"
          >
          add User
          </Link>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
