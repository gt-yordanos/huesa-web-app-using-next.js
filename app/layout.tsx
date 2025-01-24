"use client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomThemeProvider } from "@/contexts/themeContext";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Dynamically fetch pathname on the client
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CustomThemeProvider>
          {/* Conditionally render Navbar */}
          {!isAdminRoute && <Navbar />}
          <main>{children}</main>
          {!isAdminRoute && <Footer/>}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
