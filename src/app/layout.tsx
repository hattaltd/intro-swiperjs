import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "./components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiperJS | Intro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-clr-bg-primary text-clr-text-primary`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
