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
  title: "Codetta Digital | Design the Future of Digital",
  description: "We build high-performance digital solutions for businesses who demand precision, innovation, and beautiful user experiences.",
  keywords: ["web development", "UI/UX design", "mobile apps", "digital strategy"], // Better as an array
  authors: [{ name: "Codetta Digital", url: "https://codetta.digital" }],
  metadataBase: new URL("https://codetta.digital"), // Required for relative image paths
  openGraph: {
    title: "Codetta Digital | Design the Future of Digital",
    description: "High-performance digital solutions for businesses.",
    url: "https://codetta.digital",
    siteName: "Codetta Digital",
    images: [
      {
        url: "/og-image.png", // Make sure this exists in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetta Digital",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Only use suppressHydrationWarning on <html> if using next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Consider a <main> wrapper if you want consistent padding across pages */}
        {children}
      </body>
    </html>
  );
}