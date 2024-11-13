import appstore from "../../../public/assets/images/AppStore.png";
import playstore from "../../../public/assets/images/GooglePlay.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black mt-auto text-white">
      <div className="mainContainer ">
        <div className="flex justify-between py-10 items-center">
          <div className="text-2xl font-bold text-white">E-SHOPPING</div>
          <div className="flex gap-32">
            <ul className="flex flex-col gap-3">
              <li>Home</li>
              <li>My Account</li>
              <li>Login</li>
              <li>Cart</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Terms Of Use</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Terms Of Use</li>
            </ul>
          </div>
          <div>
            <div>
              <Image src={appstore} alt="app-store" />
            </div>
            <div>
              <Image src={playstore} alt="play-store" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
