import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALP Email Campaigns",
  description: "Controlled lead magnet and email campaign infrastructure for ALP / Contractor Circle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

