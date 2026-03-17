import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "The Corner Bistro - Farm-to-Table Dining",
  description: "Experience elevated comfort food using locally sourced ingredients in the heart of Austin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimson.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
