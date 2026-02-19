import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Grainient from "@/components/Grainient";
import StaggeredMenu, {
  StaggeredMenuItem,
  StaggeredMenuSocialItem,
} from "@/components/StaggeredMenu";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80";

type Props = { params: Promise<{ locale: string }> };

const normalizePhone = (value: string) => value.replace(/[^\d+]/g, "");

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tNav = await getTranslations("nav");
  const tHero = await getTranslations("hero");
  const tAbout = await getTranslations("about");
  const tVision = await getTranslations("vision");
  const tLocations = await getTranslations("locations");
  const tServices = await getTranslations("services");
  const tContact = await getTranslations("contact");
  const tFooter = await getTranslations("footer");

  const base = `/${locale}`;
  const menuItems: StaggeredMenuItem[] = [
    { label: tNav("home"), ariaLabel: tNav("homeAria"), link: base },
    { label: tNav("about"), ariaLabel: tNav("aboutAria"), link: `${base}#about` },
    {
      label: tNav("services"),
      ariaLabel: tNav("servicesAria"),
      link: `${base}#services`,
    },
    {
      label: tNav("contact"),
      ariaLabel: tNav("contactAria"),
      link: `${base}#contact`,
    },
  ];

  const socialItems = [
    { label: "X", link: process.env.NEXT_PUBLIC_SOCIAL_X_URL },
    { label: "LinkedIn", link: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL },
    { label: "Instagram", link: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL },
  ]
    .filter(
      (item): item is StaggeredMenuSocialItem =>
        typeof item.link === "string" && item.link.length > 0,
    )
    .map((item) => ({ label: item.label, link: item.link }));

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const contactWhatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP;
  const mapsUrl = process.env.NEXT_PUBLIC_CONTACT_MAPS_URL;
  const whatsappLink = contactWhatsapp
    ? `https://wa.me/${normalizePhone(contactWhatsapp)}`
    : null;

  return (
    <div className="min-h-screen bg-background">
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-30 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, transparent 100%)",
        }}
        aria-hidden
      />
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/logo.png"
        accentColor="#5227FF"
        isFixed
        headerRight={<LocaleSwitcher />}
      />

      <section
        className="relative flex min-h-[640px] items-center px-6 py-28 text-white md:min-h-[720px] md:py-32"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          <Grainient
            color1="#94b8ff"
            color2="#5227FF"
            color3="#70aeff"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1fr,minmax(380px,1fr)] md:items-center md:gap-20">
          <div className="flex flex-col">
            <p
              className="font-tajawal text-xs font-medium uppercase tracking-[0.2em] text-white/70 md:text-[13px]"
              aria-hidden
            >
              {tHero("overline")}
            </p>
            <h1 className="font-tajawal mt-2 text-[2.75rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl md:tracking-[-0.02em]">
              {tHero("title")}
            </h1>
            <p className="font-tajawal mt-5 max-w-md text-xl font-medium text-white/95 md:text-2xl md:leading-snug">
              {tHero("tagline")}
            </p>
            <p className="font-tajawal mt-4 max-w-lg text-[15px] leading-relaxed text-white/80 md:text-base">
              {tHero("description")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="font-tajawal rounded-lg bg-white px-6 text-[#5227FF] hover:bg-white/95"
                asChild
              >
                <a href={`${base}#contact`}>{tHero("ctaContact")}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-tajawal rounded-lg border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href={`${base}#services`}>{tHero("ctaServices")}</a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:aspect-[5/4] md:max-h-[520px] md:rounded-xl">
            <Image
              src={HERO_IMAGE_URL}
              alt={tHero("heroImageAlt")}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 bg-zinc-50 py-20 md:py-28"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-tajawal text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {tAbout("overline")}
          </p>
          <h2
            id="about-heading"
            className="font-tajawal mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
          >
            {tAbout("heading")}
          </h2>
          <div className="font-tajawal mt-6 space-y-5 text-[15px] leading-relaxed text-zinc-700 md:text-base">
            <p>{tAbout("p1")}</p>
            <p>{tAbout("p2")}</p>
            <p>{tAbout("p3")}</p>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="scroll-mt-24 border-t border-zinc-200 bg-white py-20 md:py-28"
        aria-labelledby="vision-heading"
      >
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-tajawal text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {tVision("overline")}
          </p>
          <h2
            id="vision-heading"
            className="font-tajawal mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
          >
            {tVision("heading")}
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-tajawal text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {tVision("visionLabel")}
              </h3>
              <p className="font-tajawal mt-2 text-[15px] leading-relaxed text-zinc-700 md:text-base">
                {tVision("visionText")}
              </p>
            </div>
            <div>
              <h3 className="font-tajawal text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {tVision("missionLabel")}
              </h3>
              <p className="font-tajawal mt-2 text-[15px] leading-relaxed text-zinc-700 md:text-base">
                {tVision("missionText")}
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-tajawal text-sm font-semibold uppercase tracking-wider text-zinc-500">
              {tVision("valuesLabel")}
            </h3>
            <ul
              className="font-tajawal mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-[15px] text-zinc-800 md:grid-cols-3 md:text-base"
              role="list"
            >
              <li>{tVision("values.trust")}</li>
              <li>{tVision("values.quality")}</li>
              <li>{tVision("values.efficiency")}</li>
              <li>{tVision("values.excellence")}</li>
              <li>{tVision("values.speed")}</li>
              <li>{tVision("values.collaboration")}</li>
            </ul>
          </div>

          <p className="font-tajawal mt-12 text-[15px] text-zinc-600 md:text-base">
            {tVision("target", {
              individuals: tVision("individuals"),
              companies: tVision("companies"),
            })}
          </p>
        </div>
      </section>

      <section
        id="locations"
        className="scroll-mt-24 border-t border-zinc-200 bg-white py-20 md:py-28"
        aria-labelledby="locations-heading"
      >
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-tajawal text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {tLocations("overline")}
          </p>
          <h2
            id="locations-heading"
            className="font-tajawal mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
          >
            {tLocations("heading")}
          </h2>

          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
            {tLocations
              .raw("items")
              .map((item: string, index: number) => {
                const [name, rest] = item.split("—");
                const title = name.trim();
                const detail = rest?.trim();
                return (
                  <article
                    key={index}
                    className="flex h-full flex-col rounded-xl border border-zinc-200 bg-zinc-50/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
                  >
                    <h3 className="font-tajawal text-base font-semibold text-zinc-900 md:text-lg">
                      {title}
                    </h3>
                    {detail && (
                      <p className="font-tajawal mt-2 text-[14px] leading-relaxed text-zinc-700 md:text-[15px]">
                        {detail}
                      </p>
                    )}
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 py-20 md:py-28"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-tajawal text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {tServices("overline")}
          </p>
          <h2
            id="services-heading"
            className="font-tajawal mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
          >
            {tServices("heading")}
          </h2>
          <p className="font-tajawal mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-700 md:text-base">
            {tServices("intro")}
          </p>

          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
            {(["registration", "captain", "permits", "insurance"] as const).map(
              (key) => (
                <article
                  key={key}
                  className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
                >
                  <h3 className="font-tajawal text-base font-semibold text-zinc-900 md:text-lg">
                    {tServices(`cards.${key}.title`)}
                  </h3>
                  <ul className="font-tajawal mt-4 space-y-1.5 text-[14px] leading-relaxed text-zinc-700 md:text-[15px]">
                    {tServices.raw(`cards.${key}.items`).map(
                      (label: string, index: number) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-[6px] h-[3px] w-[14px] flex-none rounded-full bg-[#5227FF]/60" />
                          <span>{label}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-zinc-900/10 bg-zinc-950 py-16 text-white md:py-20"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="font-tajawal text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              {tContact("overline")}
            </p>
            <h2
              id="contact-heading"
              className="font-tajawal mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl"
            >
              {tContact("heading")}
            </h2>
            <p className="font-tajawal mt-4 text-[15px] leading-relaxed text-white/80 md:text-base">
              {tContact("intro")}
            </p>
              <p className="font-tajawal mt-6 text-[15px] leading-relaxed text-white/80 md:text-base">
                {tContact("note")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactPhone ? (
                  <Button
                    asChild
                    className="font-tajawal rounded-lg bg-white px-5 text-zinc-900 hover:bg-white/90"
                  >
                    <a href={`tel:${normalizePhone(contactPhone)}`}>
                      {tContact("actions.call")}
                    </a>
                  </Button>
                ) : null}
                {contactEmail ? (
                  <Button
                    asChild
                    variant="outline"
                    className="font-tajawal rounded-lg border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={`mailto:${contactEmail}`}>{tContact("actions.email")}</a>
                  </Button>
                ) : null}
                {whatsappLink ? (
                  <Button
                    asChild
                    variant="outline"
                    className="font-tajawal rounded-lg border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      {tContact("actions.whatsapp")}
                    </a>
                  </Button>
                ) : null}
                {mapsUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    className="font-tajawal rounded-lg border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                      {tContact("actions.map")}
                    </a>
                  </Button>
                ) : null}
              </div>
          </div>

          <div className="max-w-sm flex-1">
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur">
              <h3 className="font-tajawal text-sm font-semibold uppercase tracking-wider text-white/80">
                {tContact("hoursTitle")}
              </h3>
              <p className="font-tajawal mt-3 text-[15px] text-white md:text-base">
                {tContact("hoursWeek")}
              </p>
              <p className="font-tajawal mt-1 text-[14px] text-white/80 md:text-[15px]">
                {tContact("hoursClosed")}
              </p>
            </div>
            <nav className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
              <Link href="/privacy" className="font-tajawal underline-offset-4 hover:underline">
                {tFooter("privacy")}
              </Link>
              <Link href="/terms" className="font-tajawal underline-offset-4 hover:underline">
                {tFooter("terms")}
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
