"use client";

export default function Error({ error}) {
  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
      <p className="mb-4">{error.message}</p>
    </div>
  );
}
