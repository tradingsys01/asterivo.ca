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
  title: "Asterivo - Cut 10+ Hours of Busy Work Every Week with Simple AI Tools",
  description: "We help small businesses automate repetitive tasks without the enterprise price tag. Get your free AI assessment and start saving time with proven automation solutions.",
  keywords: "AI automation for small business, business process automation, AI tools for small businesses, time-saving automation, repetitive task automation, AI consulting, business efficiency",
  authors: [{ name: "Asterivo" }],
  creator: "Asterivo",
  publisher: "Asterivo",
  metadataBase: new URL("https://asterivo.ca"),
  openGraph: {
    title: "Asterivo - Cut 10+ Hours of Busy Work Every Week with Simple AI Tools",
    description: "We help small businesses automate repetitive tasks without the enterprise price tag. Start saving time with proven AI automation solutions.",
    url: "https://asterivo.ca",
    siteName: "Asterivo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asterivo - Cut 10+ Hours of Busy Work Every Week with Simple AI Tools",
    description: "We help small businesses automate repetitive tasks without the enterprise price tag. Get your free AI assessment today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
