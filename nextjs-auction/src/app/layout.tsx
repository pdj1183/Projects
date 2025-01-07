import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auctions and Bids",
  description: "Learn to recreate Cars and Bids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
