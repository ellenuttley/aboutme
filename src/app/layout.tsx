import type { Metadata } from "next";
import { Calistoga, Lexend, Solway, Bungee } from "next/font/google";
import ClientNavbar from "@/components/ClientNavbar";
import Footer from "@/components/Footer";

import "./globals.css";

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
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calistoga.variable} ${lexend.variable} ${solway.variable} ${bungee.variable}`}
      >
        <ClientNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
