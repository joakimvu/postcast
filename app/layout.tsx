import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Generer podcast med AI",
  icons: {
    icon: "/icons/logo.svg",
  },
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
