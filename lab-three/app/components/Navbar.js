"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/Contact", name: "Contact Us" },
    { path: "/Login", name: "Login" },
      { name: 'Users', path: '/adduser' },
  ];

  return (
    <nav className="sticky top-0 flex items-center justify-center gap-4 bg-[#e7e2e2] py-3 px-5 text-[#070927] text-[18px] font-bold text-center shadow">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            pathname === link.path ? "text-red-800" : "text-[#070927]"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
