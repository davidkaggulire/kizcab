import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto", // You can use this variable to apply it globally
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "KizCab",
  description: "Seamless transport",
  icons: {
    icon: "/kizcab1.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // include open graph for other sites
  openGraph: {
    title: "KizCab - Seamless transport",
    description:
      "Effortlessly travel with KizCab, the ultimate transport solution.",
    url: "https://kizcab.vercel.app/", // Replace with your app's URL
    siteName: "KizCab",
    images: [
      {
        url: "https://kizcab.vercel.app/kizcab1.png", // Use absolute URLs here
        width: 1200,
        height: 630,
        alt: "KizCab Logo",
      },
    ],
    locale: "en_US",
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
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
