# Ibhar Landing Page – Design & Build Plan

Based on **Ibhar Profile - Final Draft.pdf** and the existing Next.js landing page.

---

## 1. Company Summary (from profile)

| Item | Detail |
|------|--------|
| **Name** | Ibhar for Registration (إبحار للتسجيل) |
| **Since** | 2018 |
| **Governance** | Emirati management; member of Mohammed bin Rashid Establishment for SME Development |
| **Position** | First centre to offer government services for registering marine vessels (national & foreign leisure ships) |
| **Scope** | Licensing, inspection, insurance, marina services – all in one place |
| **Differentiator** | Convenient locations and working hours for clients |

---

## 2. Proposed Page Structure (sections in order)

| # | Section ID | Purpose |
|---|------------|--------|
| 1 | **Hero** | Headline, short tagline, primary CTAs (keep current layout; align copy to profile) |
| 2 | **About** | “Get to know us” – who we are, since 2018, MBRE member, first centre, one-stop services |
| 3 | **Vision & Values** | Vision (leading centre in marine services), mission (one-stop desks), values (Trust, Quality, Efficiency, Excellence, Speed, Collaboration), who we target (Individuals, Companies) |
| 4 | **Services** | Four main service pillars with sub-items (from profile) |
| 5 | **Locations** | Where to find us – Dubai Marina, Mina Rashid, JA Marina, Dubai Creek, Dubai Harbour, Yas Marina Abu Dhabi |
| 6 | **Operating Hours & Contact** | Mon–Sat 08:00–17:00, closed Sunday; contact/CTA and optional QR placeholder |

---

## 3. Content per Section (from PDF)

### 3.1 Hero (update existing)
- **Headline:** Ibhar (keep).
- **Tagline:** e.g. “Yacht & marine vessel registration in Dubai” or “Government services for yacht registration, licensing & insurance – one centre.”
- **Short line:** First centre under Emirati management (MBRE member) offering licensing, inspection, insurance and marina services in one place.
- **CTAs:** “Get started” → `#contact`, “Our services” → `#services` (keep).

### 3.2 About (#about)
- **Title:** “Get to know us” / “About Ibhar Registration”.
- **Copy:** Since 2018, Ibhar Registration has been an Emirati-managed centre and a member of the Mohammed bin Rashid Establishment for Small and Medium Enterprises Development. “Ibhar Registration Centre” is the **first centre** to offer government services for registering marine vessels (national and foreign leisure ships), with licensing, inspection, insurance and a wide range of services. What sets us apart: **convenient locations and working hours** for our clients.

### 3.3 Vision & Values
- **Vision:** To become the leading centre in the field of marine services.
- **Mission:** To fulfil the requirements of marine craft owners and provide all services at one-stop registration desks.
- **Values (6):** Trust, Quality, Efficiency, Excellence, Speed, Collaboration.
- **We target:** Individuals and Companies.

### 3.4 Services (#services) – four pillars

**1. Boat and Yacht Registration and Inspection**
- Boat and Yacht New Registration  
- Boat and Yacht License Renewal  
- Bill of Sale and Transfer of ownership  
- Normal Cancellation  
- Cancellation with Export  
- Boat and Yacht Technical Inspection  
- Technical Amendment  
- Non-Technical Amendment  

**2. Captain License**
- Captain License Registration  
- Captain License Renewal  
- Captain License Amendment  
- Captain License Cancellation  

**3. Permit Services for Foreign Vessels**
- Full insurance and Third-Party Liability insurance  
- Shipping Broker  
- Maritime Cargo Shipping Services  
- Yacht Supply Contracts  
- Maritime Shipping Line Agent  

**4. Insurance Service**
- Full insurance and Third-Party Liability (can be grouped with Permit services in UI if desired).

### 3.5 Locations
- Dubai Marina Yacht Club – Berth G-28, Floating Kiosk  
- Mina Rashid Marine  
- JA Marina (Jebel Ali)  
- Dubai Creek Golf & Yachts Club  
- Dubai Harbour Marinas L.L.C.  
- Yas Marina Abu Dhabi – Office 1–6  

### 3.6 Operating Hours & Contact (#contact)
- **Hours:** 08:00 AM – 05:00 PM, Mon–Sat | Closed Sunday.  
- **Contact:** CTA (e.g. “Contact us”, “Get in touch”) and optional note for “Scan QR code” (placeholder or link to contact/WhatsApp etc.).

---

## 4. Design Direction

- **Keep:** Tajawal font, Grainient hero background, StaggeredMenu nav, white top gradient, shadcn, current colour accent (#5227FF / purple–blue).
- **Tone:** Professional, government-trusted, clear hierarchy; support Arabic where useful (e.g. section titles or key phrases).
- **Layout:**  
  - Hero: left copy, right image (current).  
  - About: full-width or contained; optional subtle background change.  
  - Vision & Values: grid of value cards or list; vision/mission as short blocks.  
  - Services: 4 main cards/columns; expandable or modal for sub-items, or simple list under each.  
  - Locations: list or cards (name + short line); optional map placeholder or links.  
  - Contact: hours + CTA + optional QR placeholder.
- **Accessibility:** Semantic sections, headings order (h1 → h2 → h3), ARIA where needed, focus states.
- **i18n (future):** Structure copy so EN/AR can be added later (e.g. keys or components).

---

## 5. Implementation Phases

### Phase 1 – Copy & Hero
- [x] Update hero tagline and short description from profile.
- [x] Ensure nav links: Home, About, Services, Contact (already present).

### Phase 2 – About & Vision/Values
- [x] Add About section (#about) with profile copy.
- [x] Add Vision & Values section (vision, mission, 6 values, “We target”).

### Phase 3 – Services
- [x] Add Services section (#services) with 4 pillars.
- [x] For each pillar: title + list of sub-services (from profile).

### Phase 4 – Locations
- [x] Add Locations section with 6 locations (names + short details).

### Phase 5 – Contact & Hours
- [x] Add Operating Hours and Contact section (#contact): hours, CTA, optional QR.

### Phase 6 – Polish
- [x] Smooth scroll / anchor behaviour for #about, #services, #contact, #locations.
- [x] Scroll margin and scroll-padding for fixed header; reduced-motion respected.
- [x] Section IDs and scroll-mt applied; copy aligned with profile.

---

## 6. File / Component Outline

- **Page:** `src/app/page.tsx` – single scrollable page; sections as above.
- **Sections:** Can be separate components under e.g. `src/components/sections/`:  
  `HeroSection.tsx`, `AboutSection.tsx`, `VisionValuesSection.tsx`, `ServicesSection.tsx`, `LocationsSection.tsx`, `ContactSection.tsx`.
- **Content:** Constants or small data files for services list, locations, hours (easier to update and later localise).
- **Assets:** Keep existing logo, Grainient, Unsplash hero image; add QR asset only if provided.

---

## 7. Success Criteria

- All profile messaging (about, vision, values, services, locations, hours) is accurately reflected.
- Navigation and CTAs lead to the right sections.
- Layout works on mobile and desktop.
- No regression on existing hero, nav, or hydration.

---

*Next step: implement Phase 1 (hero copy), then Phase 2 (About + Vision/Values), then Services, Locations, and Contact in order.*
