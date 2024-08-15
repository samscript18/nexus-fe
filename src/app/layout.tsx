import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import RQProvider from "../provider/reactQuery.provider";
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
    <html lang="en">
      <RQProvider>
        <body className={comic_neue.className}>
          <Toaster position="top-right" reverseOrder={false} />
          <div>{children}</div>
        </body>
      </RQProvider>
    </html>
  );
}
