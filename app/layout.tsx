import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Corinthia, Montserrat } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant-garamond",
});

const corinthia = Corinthia({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-corinthia",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${corinthia.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
