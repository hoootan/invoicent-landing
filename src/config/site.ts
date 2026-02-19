export const siteConfig = {
  name: "Invoicent",
  url: "https://invoicentapi.hiolo.dev",
  appStoreUrl: "https://apps.apple.com/us/app/invoicent/id6759349255",

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
    },
    {
      title: "PDF that looks premium",
      description: "Crisp layout, consistent spacing, and client-ready output.",
    },
    {
      title: "Branding built-in",
      description: "Add your logo and keep your invoices on-brand.",
    },
    {
      title: "Multi-currency friendly",
      description: "Invoice clients in the currency you need.",
    },
    {
      title: "Clients + line items",
      description: "Keep it structured — items, quantities, taxes, totals.",
    },
    {
      title: "Pro when you need it",
      description: "Upgrade for power features — without naggy UX.",
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
      name: "Pro",
      price: "—",
      tagline: "Branding + advanced features for serious invoicing.",
      bullets: [
        "Brand customization",
        "More templates & controls",
        "Priority features as we ship",
      ],
      highlight: true,
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
      a: "Email: support@hiolo.dev (change if you want a dedicated Invoicent address).",
    },
  ],
} as const;
