import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

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
        <section className="site-layout">
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
