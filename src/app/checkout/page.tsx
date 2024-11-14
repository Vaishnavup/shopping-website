"use client";

import Image from "next/image";
import img from "../../../public/assets/icons/trolley_9710589.png";
import { useAuth } from "@/utils/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/utils/context/CartContext";
import Link from "next/link";
const OrderPlaced = () => {
  const { email } = useAuth();
  const { clearCart } = useCart();

  const router = useRouter();

  useEffect(() => {
    if (!email) {
      router.push("/login");
    }
    if (email) {
      clearCart();
    }
  }, [email, router]);

  if (!email) return null;

  return (
    <>
      <section className="mainContainer pt-32 pb-10 flex flex-col gap-8">
        <h3 className="text-center text-3xl font-medium">
          Thank you, {email} Your order has been placed.
        </h3>
        <div className="max-w-80 mx-auto">
          <Image src={img} alt="order-success" />
        </div>
        <Link
          href={"/"}
          className="bg-black text-white mx-auto p-5 rounded-md hover:bg-red-800 hover:text-white transition-all"
        >
          Back to Home Page
        </Link>
      </section>
    </>
  );
};

export default OrderPlaced;
