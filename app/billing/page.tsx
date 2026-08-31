import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Billing Terms | ACTS Auctioneer Training",
  description: "ACTS Pro subscription, renewal and cancellation information.",
};

export default function BillingPage() {
  return (
    <LegalShell title="Billing Terms" eyebrow="ACTS Pro" meta="Subscription and purchase information">
      <p className="legal-intro">ACTS may offer Weekly, Monthly and Annual auto-renewable ACTS Pro subscriptions through Apple’s In-App Purchase system.</p>

      <div className="legal-note"><p>Current Australian pricing is displayed in ACTS and confirmed by Apple before purchase. Prices and availability may vary by storefront.</p></div>

      <h2>Payment</h2>
      <p>Payment is charged to your Apple account when the purchase is confirmed. ACTS does not directly process or store payment-card information.</p>

      <h2>Automatic Renewal</h2>
      <p>Subscriptions renew automatically for the selected billing period unless cancelled through Apple account settings in accordance with Apple’s subscription rules.</p>

      <h2>Cancellation</h2>
      <p>You can manage or cancel subscriptions through <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">Apple subscription settings</a>. Cancellation stops future renewals; access generally continues until the end of the current paid subscription period, subject to Apple’s policies.</p>

      <h2>Restore Purchases</h2>
      <p>If you have an existing ACTS Pro entitlement, use Restore Purchases inside ACTS to ask Apple’s purchasing system to restore eligible purchases.</p>

      <h2>Pricing and Availability</h2>
      <p>Prices, currencies, taxes and availability may vary by storefront and will be shown by Apple before purchase. The Australian App Store currently offers Weekly, Monthly and Annual ACTS Pro options.</p>

      <h2>Refunds</h2>
      <p>Purchases are processed by Apple. Refund eligibility and requests are handled under Apple’s applicable policies through <a href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>.</p>

      <h2>Contact</h2>
      <p>For subscription support, contact <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a>.</p>
    </LegalShell>
  );
}
