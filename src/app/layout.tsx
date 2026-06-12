import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Smile Dental | Premium Dental Care & Cosmetic Dentistry",
  description:
    "Bright Smile Dental offers expert dental care, Invisalign, dental implants, cosmetic dentistry, and family dentistry. Schedule your appointment today.",
  keywords:
    "dentist, dental clinic, Invisalign, dental implants, cosmetic dentistry, teeth whitening, family dentist, emergency dentist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
