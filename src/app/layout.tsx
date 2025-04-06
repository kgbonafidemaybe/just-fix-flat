import type { Metadata } from "next";
import { Comic_Neue, Bangers, Permanent_Marker, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: ["400"],
  variable: "--font-bangers",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  variable: "--font-permanent-marker",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JustFix Pro | Professional Home Repair Services",
  description: "Fast, reliable and guaranteed home repair services. From plumbing to electrical work, JustFix Pro delivers quality repairs with no surprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comicNeue.variable} ${bangers.variable} ${permanentMarker.variable} antialiased bg-justfix-blue text-white`}
      >
        {children}
      </body>
    </html>
  );
}
