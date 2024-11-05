import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavLinks } from "./components/navigation";


export const metadata: Metadata = {
  title: "Phill's Chat App",
  description: "Next.js Chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
