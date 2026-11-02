import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "地形彈珠賽｜捏出大地，滾出你的勝利",
  description: "五人一組，捏出五大地形、答題收集彈珠，一起迎接落球決賽。",
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
    <html lang="zh-Hant-TW">
      <body className="antialiased">{children}</body>
    </html>
  );
}
