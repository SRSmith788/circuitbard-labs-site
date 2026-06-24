import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Circuitbard Labs | Practical Digital Tools",
  description:
    "Circuitbard Labs builds useful websites, homebrewed apps, and lightweight digital systems for everyday chaos.",
  keywords: [
    "Circuitbard Labs",
    "web design",
    "small business websites",
    "homebrewed apps",
    "digital tools",
    "FollowUp Agent",
  ],
  authors: [{ name: "Circuitbard Labs" }],
  creator: "Circuitbard Labs",
  openGraph: {
    title: "Circuitbard Labs | Practical Digital Tools",
    description:
      "Useful websites, homebrewed apps, and lightweight digital systems built to keep the little things from piling up.",
    siteName: "Circuitbard Labs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Circuitbard Labs | Practical Digital Tools",
    description:
      "Useful websites, homebrewed apps, and lightweight digital systems built to keep the little things from piling up.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
