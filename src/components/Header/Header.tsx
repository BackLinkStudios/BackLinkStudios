"use client";
import Link from "next/link";
import "./Header.scss";
import { usePathname } from "next/navigation";
// import logo from "../../../public/logo.png";
// import logo from './logo.png';
// import Image from "next/image";
export default function Header() {
    const pathName = usePathname();
    const NavLinks = [
        { name: "Home", path: "/" },
        { name: "Hello Page", path: "/hello" },
        { name: "About", path: "/about" },
        { name: "About", path: "/about" },
        { name: "About", path: "/about" },
    ];
    return (
        <header>
            <div className="container mx-auto flex flex-wrap justify-between p-5">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4">
                    <img src="/logo.png" alt="logo" width="200px" height="auto"/>
                    {/* <div className="logo_text">
                        <span className="text-[#fe5855]">Back</span>
                        <span className="text-[#6721ff]">Link</span>Studio.com
                    </div> */}
                </Link>
                <div className="flex flex-wrap items-center text-base justify-center">
                    {NavLinks.map((nav, i) => {
                        return (
                            <Link key={i} href={nav.path} className={`m-5 ${pathName === nav.path ? "text-[#6721ff]" : "text-white"} text-xl font-semibold hover:text-[#6721ff]`}>
                                {nav.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
