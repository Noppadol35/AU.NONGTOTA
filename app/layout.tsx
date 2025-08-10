import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AU.NONGTOTA - Complete Toyota Car Repair Services",
  description:
    "Professional Toyota repair services with fair prices and guaranteed quality. Expert technicians, genuine parts, and transparent pricing in Thailand.",
  keywords:
    "Toyota repair, car service, automotive repair, engine repair, body paint, maintenance, electrical repair, Thailand",
  authors: [{ name: "AU.NONGTOTA" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  verification: {
    google: "QcYGGJMJGToiai5t3n5h_7tyKXtKDocPTMLjkyEMYCk",
  },
  openGraph: {
    title: "AU.NONGTOTA - Complete Toyota Car Repair Services",
    description:
      "Professional Toyota repair services with fair prices and guaranteed quality.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#EB0A1E" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
