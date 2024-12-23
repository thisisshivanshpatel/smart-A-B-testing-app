import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A/B Testing app",
  description: "Smart A/B Testing app for generating more leads",
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
