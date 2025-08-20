import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services - AI Business Solutions",
  description: "Comprehensive AI services including strategy consulting, custom AI development, process automation, and data analytics to transform your business operations.",
  keywords: "AI services, AI consulting, custom AI development, process automation, data analytics, machine learning services, AI strategy",
  openGraph: {
    title: "AI Services - AI Business Solutions",
    description: "Comprehensive AI services including strategy consulting, custom AI development, process automation, and data analytics to transform your business operations.",
    url: "https://asterivo.ca/services",
  },
  twitter: {
    title: "AI Services - AI Business Solutions",
    description: "Comprehensive AI services including strategy consulting, custom AI development, process automation, and data analytics to transform your business operations.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}