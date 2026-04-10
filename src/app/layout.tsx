import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';
import { AptabaseProvider } from '@aptabase/react';
import { ThemeProvider } from '@/components/theme-provider';
import { string } from '@/utils/string';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(string.metadata.url),
  title: {
    default: string.metadata.title,
    template: string.metadata.titleTemplate,
  },
  description: string.metadata.description,
  keywords: string.metadata.keywords,
  applicationName: string.metadata.siteName,
  authors: [{ name: string.metadata.siteName, url: string.metadata.url }],
  creator: string.metadata.siteName,
  publisher: string.metadata.siteName,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: string.metadata.locale,
    url: string.metadata.url,
    siteName: string.metadata.siteName,
    title: string.metadata.title,
    description: string.metadata.description,
  },
  twitter: {
    card: 'summary',
    title: string.metadata.title,
    description: string.metadata.description,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="fr" suppressHydrationWarning>
    <body
      className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        disableTransitionOnChange
      >
        <AptabaseProvider appKey="A-EU-4649182773">
          <Navbar />
          <main className="pt-20">{children}</main>
        </AptabaseProvider>
        <Toaster />
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
