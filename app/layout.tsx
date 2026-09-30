import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESSENTIAL MASTERY",
  description: "4000 Essential English Words 1: so‘zlar, talaffuz, English ↔ Uzbek mashqlari va uzoq muddatli takrorlash.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  );
}
