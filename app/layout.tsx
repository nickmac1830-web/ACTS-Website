import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACTS Auctioneer Training | Train. Analyse. Improve.",
  description:
    "Purpose-built auctioneer training for speed, accuracy, memory and confident performance under pressure. Available on the App Store.",
  keywords: [
    "auctioneer training",
    "auction training app",
    "auction simulator",
    "auctioneering practice",
    "auction mental maths",
  ],
  icons: {
    icon: "/media/acts-icon.png",
    shortcut: "/media/acts-icon.png",
    apple: "/media/acts-icon.png",
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
