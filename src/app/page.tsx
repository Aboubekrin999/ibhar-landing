import Image from "next/image";
import Grainient from "@/components/Grainient";
import StaggeredMenu, {
  StaggeredMenuItem,
  StaggeredMenuSocialItem,
} from "@/components/StaggeredMenu";
import { Button } from "@/components/ui/button";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80";

const menuItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about Ibhar", link: "#about" },
  {
    label: "Services",
    ariaLabel: "View yacht registration services",
    link: "#services",
  },
  { label: "Contact", ariaLabel: "Get in touch with Ibhar", link: "#contact" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* White transparent gradient overlay on top of header area */}
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
      />

      {/* Hero section */}
      <section
        className="relative flex min-h-[600px] items-center px-6 py-24 text-white md:min-h-[700px]"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0"
          style={{ width: "100%", height: "100%", position: "absolute" }}
        >
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
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-16">
          {/* Left: title, description, CTAs */}
          <div className="flex flex-col text-left">
            <h1 className="font-tajawal text-5xl font-extrabold tracking-tight drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl">
              Ibhar
            </h1>
            <p className="font-tajawal mt-4 text-2xl font-medium text-white/95 sm:text-3xl md:text-4xl">
              Yacht registration services in Dubai
            </p>
            <p className="font-tajawal mt-3 max-w-lg text-lg text-white/85 sm:text-xl md:text-2xl">
              Expert vessel registration and maritime compliance for owners and
              operators in the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="font-tajawal bg-white text-[#5227FF] hover:bg-white/90"
                asChild
              >
                <a href="#contact">Get started</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-tajawal border-white/60 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#services">Our services</a>
              </Button>
            </div>
          </div>
          {/* Right: Unsplash image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-square md:max-h-[480px]">
            <Image
              src={HERO_IMAGE_URL}
              alt="Luxury yacht at sea - yacht registration services Dubai"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

