import type { Metadata } from "next";
import { Geist_Mono, Cairo, Montserrat } from "next/font/google";
import { getLocale } from "next-intl/server";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibhar.ae"),
  title: {
    default: "Ibhar | Yacht Registration Services Dubai",
    template: "%s | Ibhar",
  },
  description:
    "Ibhar — yacht registration services in Dubai. Expert vessel registration and maritime compliance.",
  applicationName: "Ibhar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${cairo.variable} ${montserrat.variable}`}
    >
      <body className={`${geistMono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
