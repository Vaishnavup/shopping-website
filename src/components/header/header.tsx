import Image from "next/image";
import cartIcon from "../../../public/assets/icons/cart-shopping.svg";
export const Header = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-between items-center py-7 mainContainer">
        <div className="flex items-center gap-9">
          <div className="text-4xl font-bold">E-SHOPPING</div>
          <ul className="flex gap-14">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="flex w-full max-w-52 gap-5">
          <button className="bg-black text-white w-full rounded-md p-2">Login</button>
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
