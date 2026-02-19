import type { Metadata } from "next";
import { Geist_Mono, Cairo, Montserrat } from "next/font/google";
import { LocaleDirSetter } from "@/components/LocaleDirSetter";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
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
    <html
      lang="en"
      dir="ltr"
      className={`${cairo.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${geistMono.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <LocaleDirSetter />
        {children}
      </body>
    </html>
  );
}
