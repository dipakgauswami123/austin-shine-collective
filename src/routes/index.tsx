import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Premium Touch Car Detailing Austin | Open 24 Hours" },
      {
        name: "description",
        content:
          "Professional car detailing in downtown Austin. Open 24 hours at 20 E 8th St. Call Premium Touch at (646) 283-0011.",
      },
      { property: "og:title", content: "Premium Touch Car Detailing Austin" },
      {
        property: "og:description",
        content: "Precision car detailing in downtown Austin, open 24 hours.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=20+E+8th+St%2C+Austin%2C+TX+78701";

const services = [
  {
    number: "01",
    name: "Interior Detailing",
    copy: "A focused reset for the cabin, from high-touch surfaces to the tight spaces that collect daily wear.",
  },
  {
    number: "02",
    name: "Exterior Detailing",
    copy: "Careful attention across paint, glass, wheels, and trim for a clean, finished presentation.",
  },
  {
    number: "03",
    name: "Complete Detail",
    copy: "Inside and outside brought together in one thorough service. Call for options for your vehicle.",
  },
];

const reviews = [
  {
    quote:
      "Just got my car detailed here and honestly couldn’t be happier with how it turned out. They did a really solid job inside and out — everything looks super clean.",
    name: "Dylan Wicher",
  },
  {
    quote:
      "Amazing service, pricing cannot be beat. I have never been happier with a detailing company.",
    name: "James Hollingsworth",
  },
  {
    quote:
      "Amazing detail service for great price — got my insanely dirty work truck spotless! 1000% recommend service.",
    name: "Kyan Williams",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-display text-base font-semibold uppercase sm:text-lg">
            Premium Touch
          </a>
          <nav
            className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
            aria-label="Main navigation"
          >
            <a className="transition-colors hover:text-primary" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-primary" href="#reviews">
              Reviews
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden text-right lg:block">
              <span className="block text-[10px] font-semibold uppercase text-muted-foreground">
                Austin, Texas
              </span>
              <span className="block text-xs font-medium">20 E 8th St</span>
            </div>
            <a
              href="tel:+16462830011"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <PhoneIcon /> Call now
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:items-end lg:gap-14 lg:py-20">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="relative aspect-[4/5] max-h-[720px] overflow-hidden rounded-lg border border-border bg-card sm:aspect-square">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWma8izleyV6aMfDsHTnlXa_21-afWuWFmWzl_eU-xvRCstshTwgdJ2FrI_xG-Ji9dHAgiPOCSDx2VHAg18cQdOSWUbkPxolFs5JzUVf6Upcjpkc1mc3GGZ_afE5I3lk-b6kmORF8dwPZ1O2=w800-h1400-k-no"
                alt="Premium Touch Car Detailing Austin — professional interior detail finish"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop";
                }}
              />
              <div className="absolute bottom-4 left-4 border border-border bg-background/90 px-3 py-2 backdrop-blur">
                <span className="block text-[10px] font-semibold uppercase text-primary">
                  Detail reference
                </span>
                <span className="block text-xs text-muted-foreground">Premium cabin finish</span>
              </div>
            </div>
          </div>
          <div className="order-1 pb-3 lg:order-2 lg:col-span-5 lg:pb-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
              <span className="font-semibold text-primary">4.7 ★</span>
              <span className="text-[10px] font-semibold uppercase text-muted-foreground">
                15 Google reviews
              </span>
            </div>
            <p className="mb-4 text-xs font-semibold uppercase text-primary">
              Car detailing service · Downtown Austin
            </p>
            <h1 className="max-w-xl font-display text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
              Precision in every surface.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Professional car detailing for Austin drivers who notice the difference. Clean work,
              clear communication, and close attention inside and out.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary"
              >
                <ArrowIcon /> Get directions
              </a>
              <div className="border-l border-border pl-4">
                <span className="block text-[10px] font-semibold uppercase text-primary">
                  Availability
                </span>
                <span className="text-sm font-medium">Open 24 hours</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-border bg-card/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="mb-3 block text-[10px] font-semibold uppercase text-primary">
                  Services
                </span>
                <h2 className="max-w-xl font-display text-3xl font-medium sm:text-4xl">
                  Care for the surfaces you see — and the ones you don’t.
                </h2>
              </div>
              <a
                href="tel:+16462830011"
                className="w-fit border-b border-primary pb-1 text-sm font-semibold"
              >
                Ask about your vehicle
              </a>
            </div>
            <div className="grid overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3 md:gap-px">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="flex min-h-64 flex-col bg-background p-7 sm:p-8"
                >
                  <span className="mb-12 font-mono text-xs text-muted-foreground">
                    {service.number} / SERVICE
                  </span>
                  <h3 className="font-display text-xl font-medium">{service.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.copy}</p>
                  <span className="mt-auto pt-8 text-primary">—</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="reviews"
          className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28"
        >
          <div className="lg:col-span-4">
            <span className="mb-3 block text-[10px] font-semibold uppercase text-primary">
              Customer feedback
            </span>
            <h2 className="font-display text-4xl font-medium">
              Austin drivers, in their own words.
            </h2>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-6xl font-semibold">4.7</span>
              <span className="text-sm text-muted-foreground">from 15 reviews</span>
            </div>
          </div>
          <div className="space-y-12 lg:col-span-8">
            {reviews.map((review, index) => (
              <blockquote
                key={review.name}
                className={`border-l-2 pl-7 ${index === 0 ? "border-primary" : "border-border"}`}
              >
                <p className="text-lg font-medium leading-8 sm:text-xl">“{review.quote}”</p>
                <footer className="mt-5 text-sm font-semibold">
                  {review.name}
                  <span className="ml-3 text-[10px] uppercase text-muted-foreground">
                    Google review
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border bg-card py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-5 sm:px-8 md:flex-row">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase text-primary">
              Ready when you are
            </p>
            <h2 className="font-display text-3xl font-medium">Bring back the premium finish.</h2>
            <a
              href="tel:+16462830011"
              className="mt-8 block font-display text-2xl font-medium text-primary"
            >
              +1 646-283-0011
            </a>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-medium">
              20 E 8th St
              <br />
              Austin, TX 78701, United States
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Open 24 hours</p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <ArrowIcon /> Open in Google Maps
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-7xl border-t border-border px-5 pt-6 text-xs text-muted-foreground sm:px-8">
          © 2026 Premium Touch Car Detailing Austin
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-border bg-background p-3 md:hidden">
        <a
          href="tel:+16462830011"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-l-md bg-primary font-semibold text-primary-foreground"
        >
          <PhoneIcon /> Call now
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-r-md bg-secondary font-semibold text-secondary-foreground"
        >
          <ArrowIcon /> Directions
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.28.374-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.006-.93.38-1.21l1.293-.97c.363-.271.528-.74.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}
