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
  title: "BK Security Services - Professional Security Solutions You Can Trust",
  description: "Leading security company providing armed guards, bodyguards, cash in transit, 24/7 monitoring, and secure transportation. Trusted by businesses and families. Call 6085933 for emergency response.",
  keywords: ["security services", "armed guards", "bodyguards", "security company", "professional security", "cash in transit", "security monitoring", "executive protection"],
  authors: [{ name: "BK Security Services" }],
  creator: "BK Security Services",
  publisher: "BK Security Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bksecurity.com'),
  openGraph: {
    title: "BK Security Services - Professional Security Solutions",
    description: "Protecting what matters most to you with professional security services. 24/7 emergency response available.",
    type: "website",
    locale: "en_US",
    siteName: "BK Security Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "BK Security Services - Professional Security Solutions",
    description: "Trusted security services for businesses and families. Emergency response: 6085933",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
