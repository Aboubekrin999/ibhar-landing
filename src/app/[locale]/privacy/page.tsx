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
    title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        en: "/en/privacy",
        ar: "/ar/privacy",
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const isArabic = locale === "ar";

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-zinc-900">
      <h1 className="font-tajawal text-3xl font-bold">
        {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
      </h1>
      <p className="font-tajawal mt-6 text-[15px] leading-relaxed text-zinc-700 md:text-base">
        {isArabic
          ? "نحترم خصوصيتك. يوضح هذا الإشعار كيفية تعاملنا مع معلومات التواصل والاستفسارات الواردة عبر قنواتنا الرسمية، وكيفية استخدامها فقط لتقديم خدمات التسجيل البحري والدعم المرتبط بها."
          : "We respect your privacy. This notice explains how we handle contact details and inquiries submitted through our official channels and use them only to provide marine registration services and related support."}
      </p>
      <p className="font-tajawal mt-4 text-[15px] leading-relaxed text-zinc-700 md:text-base">
        {isArabic
          ? "لا نبيع بياناتك الشخصية. قد نشارك البيانات عند الحاجة التشغيلية مع الجهات التنظيمية أو مزودي الخدمات المعتمدين ضمن الحدود القانونية."
          : "We do not sell personal data. Information may be shared only when operationally required with regulators or approved service providers within legal limits."}
      </p>
      <p className="font-tajawal mt-4 text-[15px] leading-relaxed text-zinc-700 md:text-base">
        {isArabic
          ? "لطلب الوصول إلى بياناتك أو تحديثها أو حذفها، تواصل معنا عبر قنوات الاتصال المنشورة على الموقع."
          : "To request access, updates, or deletion of your data, contact us through the channels listed on this website."}
      </p>
    </main>
  );
}
