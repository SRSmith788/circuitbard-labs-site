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
  title: "Circuitbard Labs — Practical Web Tools & Small Business Sites",
  description:
    "Circuitbard Labs builds practical web tools, lightweight apps, and clean small-business websites for people who need useful things shipped without the bloat.",
  icons: {
    icon: "/circuitbard-icon.svg",
    apple: "/circuitbard-icon.svg",
  },
  openGraph: {
    title: "Circuitbard Labs",
    description:
      "Practical web tools, lightweight apps, and clean small-business websites built with focus, clarity, and a little bardic stubbornness.",
    images: [
      {
        url: "/circuitbard-logo.jpg",
        width: 1254,
        height: 1254,
        alt: "Circuitbard Labs logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Circuitbard Labs",
    description:
      "Practical web tools, lightweight apps, and clean small-business websites built with focus, clarity, and a little bardic stubbornness.",
    images: ["/circuitbard-logo.jpg"],
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
