import type { Metadata } from "next";
import Header from "./Header";

import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

import "./globals.css";
import next from "next";

export const metadata: Metadata = {
  title: "Lucha Blogs",
  description: "Your one-stop shop for all things lucha libre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <div className={`${nunito.className} container p-4 mx-auto`}>
          {children}
        </div>
      </body>
    </html>
  );
}
