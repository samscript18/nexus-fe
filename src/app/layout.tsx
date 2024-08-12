import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

const comic_neue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "NEXUS",
  description: "Nexus 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comic_neue.className}>{children}</body>
    </html>
  );
}
