import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { CartProvider } from "@/utils/context/CartContext";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Shopping - Best Products Online",
  description:
    "Discover premium baby products at E-Shopping. Shop safe, high-quality items for newborns, toddlers, and more. Enjoy secure checkout, fast shipping, and exclusive offers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
        />
        <CartProvider>
          <section className="site-layout">
            <Header />
            {children}
            <Footer />
          </section>
        </CartProvider>
      </body>
    </html>
  );
}
