"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <nav className="flex items-center gap-1" aria-label="Switch language">
      {locale === "en" ? (
        <Link
          href="/"
          locale="ar"
          className="font-tajawal rounded-md px-2.5 py-1.5 text-sm font-medium text-white/90 outline-none ring-white/30 transition hover:bg-white/10 hover:text-white focus-visible:ring-2"
        >
          العربية
        </Link>
      ) : (
        <Link
          href="/"
          locale="en"
          className="font-tajawal rounded-md px-2.5 py-1.5 text-sm font-medium text-white/90 outline-none ring-white/30 transition hover:bg-white/10 hover:text-white focus-visible:ring-2"
        >
          English
        </Link>
      )}
    </nav>
  );
}
