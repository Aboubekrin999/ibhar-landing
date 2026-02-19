"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { routing } from "@/i18n/routing";

export function LocaleDirSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname?.replace(/^\//, "").split("/")[0] ?? "";
    const locale =
      routing.locales.includes(segment as "en" | "ar") ? segment : routing.defaultLocale;
    const dir = locale === "ar" ? "rtl" : "ltr";
    const lang = locale === "ar" ? "ar" : "en";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [pathname]);

  return null;
}
