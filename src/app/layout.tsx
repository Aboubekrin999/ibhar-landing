import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ibhar | Yacht Registration Services Dubai",
  description: "Ibhar — yacht registration services in Dubai. Expert vessel registration and maritime compliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
