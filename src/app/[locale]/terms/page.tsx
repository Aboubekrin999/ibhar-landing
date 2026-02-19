import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    title: locale === "ar" ? "الشروط والأحكام" : "Terms and Conditions",
    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        en: "/en/terms",
        ar: "/ar/terms",
      },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const isArabic = locale === "ar";

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-zinc-900">
      <h1 className="font-tajawal text-3xl font-bold">
        {isArabic ? "الشروط والأحكام" : "Terms and Conditions"}
      </h1>
      <p className="font-tajawal mt-6 text-[15px] leading-relaxed text-zinc-700 md:text-base">
        {isArabic
          ? "باستخدام هذا الموقع، توافق على استخدام المحتوى لأغراض المعلومات العامة فقط. قد تتغير الخدمات والمتطلبات والمواعيد وفق الجهات المنظمة المختصة."
          : "By using this website, you agree that its content is for general information purposes only. Service scope, requirements, and timelines may change according to the relevant regulators."}
      </p>
      <p className="font-tajawal mt-4 text-[15px] leading-relaxed text-zinc-700 md:text-base">
        {isArabic
          ? "يجب تقديم مستندات صحيحة وحديثة عند طلب أي خدمة. يظل مقدم الطلب مسؤولاً عن دقة البيانات المقدمة."
          : "Valid and up-to-date documentation is required for any service request. Applicants remain responsible for the accuracy of submitted information."}
      </p>
      <p className="font-tajawal mt-4 text-[15px] leading-relaxed text-zinc-700 md:text-base">
        {isArabic
          ? "قد يتم تحديث هذه الشروط دورياً. استمرار استخدام الموقع يعني قبول النسخة الأحدث المنشورة."
          : "These terms may be updated periodically. Continued use of the website indicates acceptance of the latest published version."}
      </p>
    </main>
  );
}
