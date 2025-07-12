import Link from "next/link";

export default function LoginPage() {
  return (
    <div className=" flex flex-col items-center justify-center  gap-3 h-[410px] font-bold text-5xl text-blue-950 ">
  <h1>Login Page</h1>
  <Link href="/" className=" text-xl text-teal-50 bg-red-500 p-2 rounded-3xl mt-3">Back to Home</Link>
  </div>
  )
}
