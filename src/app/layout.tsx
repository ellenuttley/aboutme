import type { Metadata } from "next";
import localFont from "next/font/local";
import { Calistoga, Lexend, Solway, Bungee } from "next/font/google";
import ClientNavbar from "@/components/ClientNavbar";
import Footer from "@/components/Footer";

import "./globals.css";

const irene = localFont({
  src: "./IreneFlorentina-Regular.woff2",
  display: "swap",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-calistoga",
  weight: "400",
  preload: true,
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
  preload: true,
});

const solway = Solway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-solway",
  preload: true,
  weight: "400"
});

const bungee = Bungee({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee",
  preload: true,
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ellen Uttley : Design Engineer",
  description: "An Application for Tailwind - made with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calistoga.variable} ${lexend.variable} ${solway.variable} ${bungee.variable} ${irene.className}`}
      >
        <ClientNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
