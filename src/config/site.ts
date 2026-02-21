export const siteConfig = {
  name: "Invoicent",
  // Canonical marketing site URL (used for SEO + OG).
  siteUrl: "https://invoicent.hiolo.dev",
  apiUrl: "https://invoicentapi.hiolo.dev",
  appStoreUrl: "https://apps.apple.com/us/app/invoicent/id6759349255",
  appStoreId: "6759349255",
  webAppUrl: "https://app.invoicent.hiolo.dev",

  tagline: "Get paid faster with invoices that look legit.",
  description:
    "Create clean invoices, export a polished PDF, and send it — from your phone.",

  nav: [
    { label: "Features", href: "#features" },
    { label: "Templates", href: "#templates" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  proofBullets: [
    "Minimal + Classic templates",
    "Crisp PDF export + sharing",
    "Branding, currency, taxes — without the clutter",
  ],

  howItWorks: [
    {
      title: "Create",
      description: "Pick a template, add your client, items, and totals — fast.",
      icon: "/thiings/invoice.png",
    },
    {
      title: "Export",
      description: "Generate a clean, share-ready PDF that looks professional.",
      icon: "/thiings/pdf.png",
    },
    {
      title: "Send",
      description: "Share the invoice in seconds and get back to work.",
      icon: "/thiings/share.png",
    },
  ],

  features: [
    {
      title: "Two clean templates",
      description: "Switch between Minimal and Classic to match your brand vibe.",
      icon: "/thiings/document.png",
    },
    {
      title: "PDF that looks premium",
      description: "Crisp layout, consistent spacing, and client-ready output.",
      icon: "/thiings/pdf.png",
    },
    {
      title: "Branding built-in",
      description: "Add your logo and keep your invoices on-brand.",
      icon: "/thiings/logo.png",
    },
    {
      title: "Multi-currency friendly",
      description: "Invoice clients in the currency you need.",
      icon: "/thiings/currency.png",
    },
    {
      title: "Clients + line items",
      description: "Keep it structured — items, quantities, taxes, totals.",
      icon: "/thiings/client.png",
    },
    {
      title: "Taxes & totals",
      description: "Handle taxes cleanly so totals are always correct.",
      icon: "/thiings/taxes.png",
    },
    {
      title: "Fast by design",
      description: "Less tapping, more shipping. Invoices in under a minute.",
      icon: "/thiings/speedometer.png",
    },
    {
      title: "Built for trust",
      description: "A focused workflow that feels professional from start to finish.",
      icon: "/thiings/shield.png",
    },
  ],

  pricing: [
    {
      name: "Free",
      price: "$0",
      tagline: "Make invoices, export PDFs, share instantly.",
      bullets: [
        "Create invoices quickly",
        "Minimal + Classic templates",
        "PDF export & sharing",
      ],
      highlight: false,
    },
    {
      name: "Pro (Monthly)",
      price: "$3.99/mo",
      tagline: "Best if you’re just getting started.",
      bullets: [
        "Unlimited clients & invoices",
        "Professional PDF invoices",
        "Custom logo on PDFs",
      ],
      highlight: false,
    },
    {
      name: "Pro (Annual)",
      price: "$29.99/yr",
      tagline: "Only $2.49/mo · 38% off",
      bullets: [
        "Unlimited clients & invoices",
        "Professional PDF invoices",
        "Expense tracking & reports",
        "Payment tracking & reminders",
      ],
      highlight: true,
    },
    {
      name: "Pro (Lifetime)",
      price: "$49.99",
      tagline: "Pay once. Use it forever.",
      bullets: [
        "One-time purchase",
        "Unlock Pro features",
        "No recurring billing",
      ],
      highlight: false,
    },
  ],

  faqs: [
    {
      q: "Is Invoicent free?",
      a: "Yes — you can create invoices and export PDFs for free. Pro unlocks additional features.",
    },
    {
      q: "Can I export a PDF?",
      a: "Yep. Invoicent generates a clean PDF you can share with clients.",
    },
    {
      q: "Does it support different currencies?",
      a: "Yes. You can invoice in the currency you need.",
    },
    {
      q: "Can I add my logo?",
      a: "Yes — branding is supported (and expanded in Pro over time).",
    },
    {
      q: "Where is my data stored?",
      a: "Your data stays in the app and is used to generate your documents. (We can tighten this text once your privacy policy is finalized.)",
    },
    {
      q: "How do I get support?",
      a: "Email: hi@hiolo.dev",
    },
  ],
} as const;
