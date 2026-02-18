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

export const metadata = {
  title: "Capio – Elemzés. Érthetően.",
  description:
    "Közérthető, mély elemzések politikáról, gazdaságról, természettudományról és kultúráról.",
  openGraph: {
    title: "Capio – Elemzés. Érthetően.",
    description:
      "Közérthető, mély elemzések Magyarországon.",
    url: "https://capio.hu",
    siteName: "Capio",
    images: [
      {
        url: "https://capio.hu/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
