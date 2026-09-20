import type { Metadata } from "next";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/media/acts-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem('acts-website-theme'); const theme = saved === 'dark' ? 'dark' : 'light'; document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; } catch (_) {} })();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
