import Image from "next/image";
import loginImg from "../../../public/assets/images/loginImg.png";
const Login = () => {
  return (
    <>
      <div className="mainContainer flex justify-between items-center my-4">
        <div className="max-w-xl">
          <Image src={loginImg} alt="login-banner-img" />
        </div>
        <div className="max-w-lg w-full">
          <form action="">
            <h2 className="text-4xl mb-10">Login</h2>
            <div className="flex flex-col gap-10">
              <input type="email" placeholder="Enter your email address" className="p-4 border border-solid border-[#ddd] rounded-md"/>
              <input type="password" placeholder="Enter your pasword" className="p-4 border border-solid border-[#ddd] rounded-md"/>
              <button type="submit" className="bg-[#DB4444] text-white rounded-md max-w-40 py-4">LogIn</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
