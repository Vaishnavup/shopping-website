"use client";
import { useAuth } from "@/utils/context/AuthContext";
import { useCart } from "@/utils/context/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CardCartBtn = ({ product }: any) => {
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
    <button
      type="button"
      className="bg-black text-white py-3"
      onClick={handleCartAction}
    >
      {isProductInCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default CardCartBtn;
