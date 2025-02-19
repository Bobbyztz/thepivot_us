import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "thepivot.us - Global Profiles for Everyone",
  description:
    "thepivot.us旨在构建全球公众档案平台，连接中国和全球的用户，提供中文、英文和法语的多语言支持.",
  keywords: [
    "global",
    "personal",
    "profile",
    "social",
    "交流",
    "中国",
    "英文",
    "法语",
  ],
  alternates: {
    canonical: "https://thepivot.us",
    languages: {
      en: "https://thepivot.us/en",
      zh: "https://thepivot.us/zh",
      fr: "https://thepivot.us/fr",
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://thepivot.us",
  name: "thepivot.us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
