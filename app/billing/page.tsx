import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Billing and Store Codes | ACTS Auctioneer Training",
  description: "Standard and Pro purchases, store codes, restoration, cancellation and refunds on Apple and Google Play.",
};

export default function BillingPage() {
  return (
    <LegalShell title="Billing and Store Codes" eyebrow="Standard and Pro" meta="Updated 3 October 2026">
      <p className="legal-intro">ACTS Standard and ACTS Pro offer weekly, monthly and annual auto-renewing subscriptions where available through the Apple App Store and Google Play. The store confirms your local price, currency, billing period and any offer before purchase.</p>
      <h2>Payment and renewal</h2>
      <p>Payment is charged to the store account you use to confirm the purchase. Subscriptions renew automatically unless cancelled under the store’s rules. Any required notice and consent applies to price changes. ACTS does not receive your full payment-card details.</p>
      <h2>Manage or cancel</h2>
      <ul>
        <li><strong>iPhone or iPad:</strong> open Settings → your name → Subscriptions → ACTS, or <a href="https://apps.apple.com/account/subscriptions">Apple subscription settings</a>.</li>
        <li><strong>Android:</strong> open Google Play → profile → Payments &amp; subscriptions → Subscriptions → ACTS, or <a href="https://play.google.com/store/account/subscriptions">Google Play subscriptions</a>.</li>
      </ul>
      <p>Cancellation normally stops the next renewal while access continues to the end of the paid period, subject to store adjustments. Deleting ACTS or requesting data deletion does not cancel billing.</p>
      <h2>Have a store code?</h2>
      <p>In ACTS 4.0.1, select <strong>Have a code? Redeem</strong> on the membership screen. On iOS this opens Apple’s code sheet, with an App Store link as an alternative. On Android it opens Google Play redemption. You can also redeem through the relevant store directly, then return to ACTS and choose <strong>Restore Purchases</strong>.</p>
      <p>Apple codes work only in Apple’s store; Google codes work only in Google Play. Eligibility, region, expiry, free access duration and renewal depend on the particular store offer. Read the store confirmation before accepting. A one- or two-week offer does not provide permanent access.</p>
      <h2>Lifetime Pro purchases and gifts</h2>
      <p>ACTS Pro Lifetime is available on the app’s Pro purchase screen as a one-time non-consumable purchase, or through an eligible store-issued gift code. It unlocks Pro without a scheduled expiry or recurring charge. Buying Lifetime does not automatically cancel an existing subscription: cancel that separately in the original store account. A gift code must be issued and accepted by the store; legacy ACTS admin codes cannot unlock current builds.</p>
      <h2>Restore access</h2>
      <p>Use Restore Purchases in ACTS with the same Apple or Google account that originally obtained access. RevenueCat verifies eligible subscriptions, Lifetime purchases and permanent gifts. A store or connection problem may delay recognition; contact support if it persists. An Apple purchase does not automatically transfer to a Google account, or vice versa.</p>
      <h2>Internet and membership checks</h2>
      <p>Purchases, redemption and restoration require a connection. Current builds retain supported-version approval for up to 30 days after a successful check. Membership is verified separately at launch, renewal or expiry; a failed renewal check can use recently verified access for up to three days while retrying. Billing grace periods are rechecked, and refunds or revocations can remove access. See the <a href="/terms">Terms and Conditions</a> for full details.</p>
      <h2>Refunds and your rights</h2>
      <p>For Apple purchases, use <a href="https://reportaproblem.apple.com/">Apple’s refund request service</a>. For Google Play, see <a href="https://support.google.com/googleplay/answer/2479637">Google Play refund help</a>. You can also contact ACTS for assistance.</p>
      <p>Store procedures do not remove any non-excludable consumer guarantee, right or remedy, including under the Australian Consumer Law. See the <a href="/terms">Terms and Conditions</a> for the complete membership terms.</p>
      <h2>Contact</h2>
      <p>Nicholas McIntyre, trading as ACTS: Auctioneer Training: <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a>.</p>
    </LegalShell>
  );
}
