"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NavbarWrapper({ children }) {
    const pathname = usePathname();
    const noNavbarRoutes = ["/Login"];

    const hideLayout = noNavbarRoutes.includes(pathname);

    return (
        <>
            {!hideLayout && <Navbar />}
            <main className="flex-1 p-4">
                {children}
            </main>
            {!hideLayout && <Footer />}
        </>
    );
}
