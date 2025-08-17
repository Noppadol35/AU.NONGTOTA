import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "อู่ น้อง.โตต้า - AU.NONGTOTA",
  description:
    "Professional Toyota repair services with fair prices and guaranteed quality. Expert technicians, genuine parts, and transparent pricing in Thailand.",
  keywords:
    "Toyota repair, car service, automotive repair, engine repair, body paint, maintenance, electrical repair, Thailand, อู่ น้องโตต้า, อู่ น้อง.โตต้า, อู่น้องโตต้า, อู่น้อง.โตต้า",
  authors: [{ name: "AU.NONGTOTA" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  verification: {
    google: "QcYGGJMJGToiai5t3n5h_7tyKXtKDocPTMLjkyEMYCk",
  },
  openGraph: {  
    title: "อู่ น้อง.โตต้า - AU.NONGTOTA",
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
        <link rel="icon" href="/maintenance.png" type="image/png" />
        <link rel="apple-touch-icon" href="/maintenance.png" />
        <meta name="theme-color" content="#EB0A1E" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
