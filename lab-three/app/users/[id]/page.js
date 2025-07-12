import React from "react";

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("User not found");
  }
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

export default async function page({ params }) {
  const { id } = params;
  const user = await getUser(id);

  let Tex_tClass = "font-bold text-gray-700";

  return (
    <div className="flex items-center justify-center h-[410px] ">
      <div className="bg-white shadow-md rounded-lg p-6 border border-red-100 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-red-900">
          {user.name}
        </h1>
        <p className="mb-2">
          <span className={Tex_tClass}>Username:</span> {user.username}
        </p>
        <p className="mb-2">
          <span className={Tex_tClass}>Email:</span> {user.email}
        </p>
        <p className="mb-2">
          <span className={Tex_tClass}>Phone:</span> {user.phone}
        </p>
        <p className="mb-2">
          <span className={Tex_tClass}>Website:</span> {user.website}
        </p>
        <p className="mb-2">
          <span className={Tex_tClass}>Company:</span> {user.company.name}
        </p>
        <p>
          <span className={Tex_tClass}>Address:</span>
          {user.address.city}, {user.address.street}
        </p>
      </div>
    </div>
  );
}
