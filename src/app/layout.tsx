import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";
import { I18nProvider } from "@/lib/i18n-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://yg-consulting.vercel.app"),
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    type: "website",
    url: "https://yg-consulting.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <I18nProvider>
          <a href="#main" className="skip-to-content">
            Skip to content
          </a>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
