"use client";
import Link from "next/link";

export default function UserCard({id, name, email, username }) {
  return (
    <div className="bg-white flex flex-col gap-1 shadow-md rounded-lg p-4 border border-red-100">
      <h2 className="text-xl font-bold text-red-700">{name}</h2>
      <p className=" font-bold">{username}</p>
      <p className="text-gray-600">@{email}</p>
      <Link
        href={`/users/${id}`}
        className="py-1 px-3 bg-red-950 rounded-2xl cursor-pointer text-white text-center font-bold my-2"
      >
        Read More
      </Link>
    </div>
  );
}