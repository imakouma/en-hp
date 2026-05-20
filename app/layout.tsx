import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "株式会社En（仮）| 人とAIを繋ぎ、リアルを動かす。",
  description:
    "AI×リアル融合ベンチャー。AIソリューション、イベントマーケティング、リノベーションプロジェクトで、人とAIを繋ぎリアルを動かします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-gray-950 text-slate-100">{children}</body>
    </html>
  );
}
