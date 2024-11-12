import Image from "next/image";
import cartIcon from "../../../public/assets/icons/cart-logo.png";
export const Header = () => {
  return (
    <header className="mainContainer sticky">
      <div className="flex justify-between items-center py-7">
        <div className="text-2xl font-bold">E-SHOPPING</div>
        <ul className="flex gap-14">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <div className="max-w-9 relative">
          <Image src={cartIcon} alt="cart-icon" />
          <span className="absolute h-5 w-5 rounded-full bg-red-400 text-white font-medium flex items-center justify-center top-0 right-0">
            1
          </span>
        </div>
      </div>
    </header>
  );
};
