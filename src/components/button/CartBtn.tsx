"use client";
import { useCart } from "@/utils/context/CartContext";
import { toast } from "react-toastify";

const CartBtn = ({ product }: any) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const isProductInCart = cart?.some((item: any) => item?.id === product?.id);

  const handleCartAction = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
      toast.info(`Removed from cart!`);
    } else {
      addToCart(product);
      toast.success(`Added to cart!`);
    }
  };

  return (
    <button
      type="button"
      className="bg-black rounded-md text-white p-4 max-w-52"
      onClick={handleCartAction}
    >
      {isProductInCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default CartBtn;
