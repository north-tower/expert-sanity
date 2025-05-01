import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow pt-[88px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
