import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import RQProvider from "@/src/Provider/reactQuery.provider";
import { Toaster } from "react-hot-toast";

const comic_neue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "NEXT",
  description: "New Evolutionaries, Xplorers, and Thinkers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RQProvider>
      <html lang="en">
        <body className={comic_neue.className}>
          <Toaster position="top-right" reverseOrder={false} />
          <div>{children}</div>
        </body>
      </html>
    </RQProvider>
  );
}
