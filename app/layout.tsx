// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
// Tùy chọn: Sử dụng font Google
import { Inter } from "next/font/google";

// IMPORT THÀNH PHẦN CHUNG
import { Footer } from "@/components/global/Footer";
import { MainNav } from "@/components/global/main-nav";
import { ThemeProvider } from "@/components/theme-provider"; // Hỗ trợ Dark/Light Mode


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oriagent",
  description: "Your best teammates, multiplied. Working Smarter, Faster, and Stronger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning để tránh lỗi giữa server và client về class 'dark'
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>

        <ThemeProvider
          attribute="class" // Thêm class 'dark' vào thẻ <html>
          defaultTheme="system" // Mặc định theo cài đặt hệ thống
          enableSystem
          disableTransitionOnChange
        >
          {/* 1. HEADER - STICKY (Dính) */}
          <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b dark:bg-gray-900/80 dark:border-gray-700">
            <MainNav />
          </div>

          {/* 2. NỘI DUNG CHÍNH - pt-16 để tránh bị Header che */}
          <main className="grow pt-0">
            {children}
          </main>

          {/* 3. FOOTER */}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}