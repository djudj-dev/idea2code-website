import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { GoogleAnalytics }from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IdeaToCode",
  description: "IdeaToCode accompagne les entreprises et TPE dans la création de sites vitrines, applications web et solutions digitales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="GTM-5JBQCDX6" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="p-4 py-10 lg:py-14 md:px-24">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
