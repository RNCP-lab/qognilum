import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura } from "next/font/google";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qognilum",
  description:
    "Qognilum develops high-fidelity, cost-effective deep-tech solutions for fibre optic sensing and photonic hardware security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Loader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
