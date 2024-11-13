"use client";
import Image from "next/image";
import cartIcon from "../../../public/assets/icons/cart-shopping.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export const Header = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    if (pathname === "/home" || pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [pathname]);

  return (
    <header className={`fixed top-0 w-full ${scrolled ? "bgBlack" : ""}`}>
      <div className="flex justify-between items-center py-7 mainContainer">
        <div className="flex items-center gap-9">
          <div className="text-4xl font-bold text-white">E-SHOPPING</div>
          <ul className="flex gap-14 text-white ">
            <a href="/home" className="hover:text-red-900">
              Home
            </a>
            <Link href="/products" className="hover:text-red-900">
              Product
            </Link>
            <Link href="/cart" className="hover:text-red-900">
              Cart
            </Link>
          </ul>
        </div>
        <div className="flex w-full max-w-52 gap-5">
          <button className="bg-white hover:bg-gray-400 text-black w-full rounded-md p-2 transition-all">
            <Link href={"/login"}>Login</Link>
          </button>
          <div className="max-w-9 relative">
            <Image src={cartIcon} alt="cart-icon" />
            <span className="absolute h-5 w-5 rounded-full bg-red-400 text-white font-medium flex items-center justify-center top-0 right-0">
              1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
