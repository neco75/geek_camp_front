import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "チーム25(仮)",
  description: "チーム25(仮)の作品です",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main
          id="children-area"
          className="p-4"
          style={{
            position: "relative",
          }}
        >
          <Background />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
