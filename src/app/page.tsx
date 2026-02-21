import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";

function AppStoreBadge({ variant }: { variant: "black" | "white" }) {
  // Official Apple badge assets stored locally (do not modify the badge artwork)
  const src =
    variant === "white"
      ? "/badges/appstore-white.svg"
      : "/badges/appstore-black.svg";

  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Download on the App Store"
      className="inline-flex"
    >
      <Image
        src={src}
        alt="Download on the App Store"
        width={250}
        height={83}
        className="h-[44px] w-auto"
        priority
        unoptimized
      />
    </a>
  );
}

function WebAppBadge({ variant }: { variant: "black" | "white" }) {
  const src =
    variant === "white"
      ? "/badges/webapp-white.svg"
      : "/badges/webapp-black.svg";

  return (
    <a
      href={siteConfig.webAppUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Open in Web App"
      className="inline-flex"
    >
      <Image
        src={src}
        alt="Open in Web App"
        width={250}
        height={83}
        className="h-[44px] w-auto"
        priority
        unoptimized
      />
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href={siteConfig.playStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Get it on Google Play"
      className="inline-flex"
    >
      <Image
        src="/badges/googleplay.png"
        alt="Get it on Google Play"
        width={250}
        height={83}
        className="h-[44px] w-auto"
        priority
        unoptimized
      />
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex justify-center">
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            {eyebrow}
          </Badge>
        </div>
      ) : null}
      <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const softwareAppLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    operatingSystem: "iOS",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
      url: siteConfig.appStoreUrl,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      ratingCount: 1000,
    },
    sameAs: [siteConfig.appStoreUrl, siteConfig.webAppUrl, siteConfig.playStoreUrl],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="grain relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareAppLd, faqLd]),
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="grid size-9 place-items-center">
              <Image
                src="/brand/logo.png"
                alt={`${siteConfig.name} logo`}
                width={36}
                height={36}
                className="size-9 rounded-none"
                priority
              />
            </div>
            <span className="font-[var(--font-display)] text-base font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pb-24 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full">
                  iOS • Invoices • PDFs
                </Badge>
                <Badge className="rounded-full bg-primary text-primary-foreground">
                  New
                </Badge>
              </div>

              <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                {siteConfig.tagline}
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                {siteConfig.description}
              </p>

              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
                {siteConfig.proofBullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="mt-[1px] inline-block size-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="dark:hidden">
                  <AppStoreBadge variant="black" />
                </div>
                <div className="hidden dark:block">
                  <AppStoreBadge variant="white" />
                </div>
                <div className="dark:hidden">
                  <WebAppBadge variant="black" />
                </div>
                <div className="hidden dark:block">
                  <WebAppBadge variant="white" />
                </div>
                <GooglePlayBadge />
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Free to try. Pro when you need it.
              </p>
            </div>

            {/* Mock / demo card */}
            <div className="relative">
              <Card className="overflow-hidden border bg-card/70 backdrop-blur">
                <div className="border-b bg-muted/30 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Invoice preview</div>
                    <Badge variant="secondary" className="rounded-full">
                      PDF ready
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-semibold">Invoicent</div>
                        <div className="text-xs text-muted-foreground">
                          Invoice #00042
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Total</div>
                        <div className="text-lg font-semibold">€1,250.00</div>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Design work</span>
                        <span>€1,000.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Consulting</span>
                        <span>€250.00</span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Status</span>
                      <span className="inline-flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500" />
                        Ready to send
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border bg-muted/30 px-3 py-2">
                      <div className="text-xs text-muted-foreground">Create</div>
                      <div className="text-sm font-medium">30s</div>
                    </div>
                    <div className="rounded-xl border bg-muted/30 px-3 py-2">
                      <div className="text-xs text-muted-foreground">Export</div>
                      <div className="text-sm font-medium">PDF</div>
                    </div>
                    <div className="rounded-xl border bg-muted/30 px-3 py-2">
                      <div className="text-xs text-muted-foreground">Send</div>
                      <div className="text-sm font-medium">Share</div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-primary/25 via-transparent to-transparent blur-2xl" />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeader
            eyebrow="Simple flow"
            title="Create → PDF → Send"
            subtitle="Three steps. No mess. Just invoices that look professional."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {siteConfig.howItWorks.map((s) => (
              <Card key={s.title} className="p-6">
                <div className="flex items-center gap-3">
                  {"icon" in s ? (
                    <Image
                      src={(s as any).icon}
                      alt={s.title}
                      width={40}
                      height={40}
                      className="size-8"
                    />
                  ) : null}
                  <div className="text-sm font-semibold">{s.title}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeader
            eyebrow="Built for real work"
            title="Fast, clean, professional"
            subtitle="Everything you need to invoice — nothing you don’t."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.features.map((f) => (
              <Card key={f.title} className="p-6">
                <div className="flex items-start gap-3">
                  {"icon" in f ? (
                    <Image
                      src={(f as any).icon}
                      alt={f.title}
                      width={40}
                      height={40}
                      className="mt-0.5 size-8 shrink-0"
                    />
                  ) : null}
                  <div>
                    <div className="text-sm font-semibold">{f.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeader
            eyebrow="Memorable"
            title="Minimal or Classic"
            subtitle="Same data. Different vibe. Keep your invoices consistent."
          />

          <div className="mt-10">
            <Tabs defaultValue="minimal">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="minimal">Minimal</TabsTrigger>
                  <TabsTrigger value="classic">Classic</TabsTrigger>
                </TabsList>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <TabsContent value="minimal" className="m-0">
                  <Card className="p-6">
                    <div className="text-sm font-semibold">Minimal</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Clean spacing, quiet confidence, modern typography.
                    </p>
                    <div className="mt-4 rounded-2xl border bg-muted/20 p-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Invoice</span>
                        <span className="font-medium">#0042</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total</span>
                        <span className="font-semibold">€1,250.00</span>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="classic" className="m-0">
                  <Card className="p-6">
                    <div className="text-sm font-semibold">Classic</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Traditional invoice look with clear structure and hierarchy.
                    </p>
                    <div className="mt-4 rounded-2xl border bg-muted/20 p-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bill To</span>
                        <span className="font-medium">Client Name</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total</span>
                        <span className="font-semibold">€1,250.00</span>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <Card className="p-6 lg:row-span-1">
                  <div className="text-sm font-semibold">Why this matters</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You’re not sending “an invoice”. You’re sending a signal.\n                    Invoicent helps that signal look premium — without extra effort.
                  </p>
                </Card>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeader
            eyebrow="Simple"
            title="Pricing"
            subtitle="Start free. Upgrade when it saves you time."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.pricing.map((p) => (
              <Card
                key={p.name}
                className={`p-6 ${p.highlight ? "border-primary/40" : ""}`}
              >
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {p.tagline}
                    </div>
                  </div>
                  <div className="font-[var(--font-display)] text-2xl font-semibold">
                    {p.price}
                  </div>
                </div>
                <Separator className="my-5" />
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="inline-block size-1.5 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="dark:hidden">
              <AppStoreBadge variant="black" />
            </div>
            <div className="hidden dark:block">
              <AppStoreBadge variant="white" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeader
            eyebrow="Answers"
            title="FAQ"
            subtitle="Short, honest answers."
          />

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="grid gap-3">
              {siteConfig.faqs.map((f) => (
                <Card key={f.q} className="p-5">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-24 pt-6">
          <Card className="overflow-hidden border bg-gradient-to-br from-primary/10 via-background to-background p-10">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <div className="font-[var(--font-display)] text-2xl font-semibold">
                  Download Invoicent
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Create a professional invoice today. Ship it in minutes.
                </p>
              </div>
              <div className="dark:hidden">
                <AppStoreBadge variant="black" />
              </div>
              <div className="hidden dark:block">
                <AppStoreBadge variant="white" />
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a className="hover:text-foreground" href="/privacy">
                Privacy
              </a>
              <a className="hover:text-foreground" href="/terms">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
