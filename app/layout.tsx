import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kids Coloring Pages - Free Printable",
  description: "Free printable coloring pages for kids featuring Pokemon, Animals, Disney characters and more themes.",
  metadataBase: new URL('https://coloringpageprint.com'),
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: 'website',
    siteName: 'Coloring Page Print',
    url: 'https://coloringpageprint.com',
  },
  alternates: {
    canonical: 'https://coloringpageprint.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
