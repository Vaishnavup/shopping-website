"use client";
import Image from "next/image";
import cartIcon from "../../../public/assets/icons/cart-shopping.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/utils/context/CartContext";
import { useAuth } from "@/utils/context/AuthContext";
export const Header = () => {
  const { cart, clearCart } = useCart();
  const { email, logout } = useAuth();
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
          <div className="text-4xl font-bold text-white">
            <a href="/">E-SHOPPING</a>
          </div>
          <ul className="flex gap-14 text-white ">
            <Link href="/home" className="hover:text-red-900">
              Home
            </Link>
            <Link href="/products" className="hover:text-red-900">
              Product
            </Link>
            <Link href="/cart" className="hover:text-red-900">
              Cart
            </Link>
          </ul>
        </div>
        <div className="flex w-full max-w-52 gap-5">
          {email ? (
            <button
              type="button"
              className="bg-white hover:bg-red-900 hover:text-white text-black w-full rounded-md p-2 transition-all"
              onClick={() => {
                logout();
                clearCart();
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              href={"/login"}
              className="bg-white hover:bg-red-900 hover:text-white text-black w-full rounded-md p-2 transition-all text-center"
            >
              Login
            </Link>
          )}
          <div className="max-w-9 relative">
            <Link href={"/cart"}>
              <Image src={cartIcon} alt="cart-icon" />
              {cart?.length > 0 && (
                <span className="absolute h-5 w-5 rounded-full bg-red-400 text-white font-medium flex items-center justify-center top-0 right-0">
                  {cart?.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
