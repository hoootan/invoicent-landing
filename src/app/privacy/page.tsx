import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
        <p>
          This Privacy Policy explains how <strong>{siteConfig.name}</strong>
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information when you use the
          Invoicent app and this website.
        </p>

        <h2>Summary</h2>
        <ul>
          <li>
            The app is built to help you create invoices and export/share PDFs.
          </li>
          <li>
            We do not sell your personal information.
          </li>
          <li>
            If we use third-party services (for example, payments/subscriptions),
            they may process limited data to provide their service.
          </li>
        </ul>

        <h2>Information you provide</h2>
        <p>
          You may enter information such as business details, client details,
          line items, amounts, taxes, notes, and branding (for example a logo) in
          order to generate invoices.
        </p>

        <h2>How we use information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Create and manage invoices inside the app</li>
          <li>Generate PDF exports and previews</li>
          <li>Provide customer support when you contact us</li>
        </ul>

        <h2>Subscriptions & payments</h2>
        <p>
          If you purchase a subscription, payments are processed by Apple through
          the App Store. We may use a subscription management provider (for
          example, RevenueCat) to verify entitlements and enable Pro features.
          These providers may process identifiers necessary to operate
          subscriptions.
        </p>

        <h2>Analytics</h2>
        <p>
          We may use basic analytics to understand usage and improve the product.
          If enabled, analytics typically collect aggregated information (for
          example, app version, device type, and high-level events). We do not
          use analytics to identify you personally.
        </p>

        <h2>Data retention</h2>
        <p>
          Invoice data is retained as long as you keep it in the app. You can
          delete invoices and related data at any time from within the app.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable measures to protect your information. However, no
          method of storage or transmission is 100% secure.
        </p>

        <h2>Children</h2>
        <p>
          Invoicent is not intended for children under 13 (or the age required
          by your jurisdiction).
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href="mailto:support@hiolo.dev">support@hiolo.dev</a>.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. We will post the updated
          version on this page.
        </p>
      </div>
    </main>
  );
}
