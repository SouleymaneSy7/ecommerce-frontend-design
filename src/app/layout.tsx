import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SkipToContent from "@/components/common/SkipToContents";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "E-commerce Website",
  description: "An e-commerce website built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  authors: [{ name: "Souleymane Sy" }],
  openGraph: {
    title: "E-commerce Website",
    description: "An e-commerce website built with Next.js and Tailwind CSS.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
