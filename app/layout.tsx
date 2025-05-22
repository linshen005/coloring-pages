import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V42ERFB1P4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V42ERFB1P4');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
