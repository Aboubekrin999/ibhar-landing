import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return {
    title: locale === "ar" ? "إبحار | خدمات تسجيل اليخوت في دبي" : "Ibhar | Yacht Registration Services Dubai",
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "إبحار | خدمات تسجيل اليخوت والوسائل البحرية"
          : "Ibhar | Yacht and Marine Vessel Registration Services",
      description: t("description"),
      url: `/${locale}`,
      siteName: locale === "ar" ? "إبحار" : "Ibhar",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Ibhar" }],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "ar"
          ? "إبحار | خدمات تسجيل اليخوت في دبي"
          : "Ibhar | Yacht Registration Services Dubai",
      description: t("description"),
      images: ["/logo.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
