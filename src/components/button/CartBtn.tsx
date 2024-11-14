"use client";
import { useAuth } from "@/utils/context/AuthContext";
import { useCart } from "@/utils/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CartBtn = ({ product }: any) => {
  const { addToCart, cart, removeFromCart } = useCart();
  const { email } = useAuth();
  const router = useRouter();

  const isProductInCart = cart?.some((item: any) => item?.id === product?.id);

  const handleCartAction = () => {
    if (email) {
      if (isProductInCart) {
        removeFromCart(product.id);
        toast.info(`Removed from cart!`);
      } else {
        addToCart(product);
        toast.success(`Added to cart!`);
      }
    } else {
      toast.info(`Please log in to add items to your cart!`);
      router.push("/login");
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <button
          type="button"
          className="bg-black rounded-md text-white p-4 max-w-52"
          onClick={handleCartAction}
        >
          {isProductInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
        <Link
          href="/cart"
          type="button"
          className="bg-white rounded-md text-black border border-solid border-black hover:bg-black hover:text-white transition-all p-4 max-w-52"
        >
          Go to Cart
        </Link>
      </div>
    </>
  );
};

export default CartBtn;
