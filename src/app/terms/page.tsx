import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">
        Terms of Use
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your use of{" "}
          <strong>{siteConfig.name}</strong> (the &ldquo;App&rdquo;) and this
          website. By using the App, you agree to these Terms.
        </p>

        <h2>Use of the App</h2>
        <ul>
          <li>
            You may use the App to create invoices and export/share PDF documents.
          </li>
          <li>
            You are responsible for the accuracy of the information you enter
            and the documents you generate.
          </li>
          <li>
            You agree not to misuse the App, attempt to disrupt it, or use it in
            a way that violates applicable laws.
          </li>
        </ul>

        <h2>Subscriptions</h2>
        <p>
          Pro features may be available via subscription or one-time purchase.
          Purchases are handled by Apple via the App Store. Pricing, billing
          cycles, and cancellation are managed in your Apple ID subscription
          settings.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The App and its content (excluding your invoice data) are owned by us
          and protected by applicable intellectual property laws.
        </p>

        <h2>Your content</h2>
        <p>
          You retain ownership of the data you enter into the App. You grant us
          permission to process that data solely for providing the App’s
          functionality (for example, generating invoices and PDFs).
        </p>

        <h2>Disclaimer</h2>
        <p>
          The App is provided &ldquo;as is&rdquo; without warranties of any kind.
          We do not guarantee that the App will be uninterrupted or error-free.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for indirect,
          incidental, special, consequential, or punitive damages, or any loss of
          profits or data.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. The latest version will be
          posted on this page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Contact{" "}
          <a href="mailto:support@hiolo.dev">support@hiolo.dev</a>.
        </p>
      </div>
    </main>
  );
}
