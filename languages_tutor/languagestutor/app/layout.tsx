
import type { Metadata } from "next";
import { Geist,  } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/common/Navbar";
import DiscountPopup from "./components/DiscountPopup";
import Footer from "./components/common/Footer";
import { Toaster } from 'react-hot-toast'
import { GlobalProvider } from "./context/GlobalContext";
import DemoFormPopup from "./components/DemoFormPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "LanguagesTutor",
  description: "Languages Tutor.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-geist antialiased`}>
          <GlobalProvider>
            <Navbar/>
            {children} 
            <Footer/>
            <DemoFormPopup/>
            <Toaster
              position="top-right" 
              toastOptions={{
                style: {
                  background: '#333',
                  color: '#fff',
                },
              }}
            />
          </GlobalProvider>
          {/* <DiscountPopup/> */}
      </body>
    </html>
  );
}
