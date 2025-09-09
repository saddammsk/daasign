import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Annie_Use_Your_Telescope } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const annie = Annie_Use_Your_Telescope({
  weight: "400",
  variable: "--font-annie",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Home | The Gud Agency",
  description: "Home | The Gud Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${annie.variable}  font-montserrat bg-black-1  antialiased`}>
        <Header></Header>
        <main className="w-full  bg-[url('/images/glitch-effect-bg.png')] bg-cover bg-center">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
