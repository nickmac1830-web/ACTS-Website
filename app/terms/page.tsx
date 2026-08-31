import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Use | ACTS Auctioneer Training",
  description: "Terms of Use for ACTS: Auctioneer Training.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" eyebrow="Using ACTS" meta="Effective date: 18 August 2026">
      <p className="legal-intro">These Terms of Use apply to ACTS: Auctioneer Training (“ACTS”). By using ACTS, you agree to use the application lawfully and in accordance with these terms.</p>

      <h2>Training Purpose</h2>
      <p>ACTS is a training and simulation application. Content, scoring, scenarios, calculations and recommendations are provided for educational and practice purposes and should not be treated as legal, financial, professional or auction-day advice.</p>

      <h2>ACTS Pro</h2>
      <p>Certain functionality may require an ACTS Pro subscription purchased through Apple’s In-App Purchase system. Subscription availability, billing and cancellation are subject to the applicable Apple App Store terms.</p>

      <h2>Acceptable Use</h2>
      <p>You must not misuse the application, attempt to interfere with its operation, reverse engineer protected components except where permitted by law, or use ACTS for unlawful purposes.</p>

      <h2>Availability and Changes</h2>
      <p>Features may be updated, changed or discontinued as ACTS develops. Reasonable efforts are made to maintain functionality, but uninterrupted availability is not guaranteed.</p>

      <h2>Intellectual Property</h2>
      <p>ACTS branding, application design, training content and original application materials remain the property of their respective rights holder or holders.</p>

      <h2>Apple Terms</h2>
      <p>Where ACTS is distributed through the Apple App Store, use of the application is also subject to Apple’s applicable Standard Licensed Application End User License Agreement and App Store terms.</p>

      <h2>Contact</h2>
      <p>Questions regarding these Terms can be directed to <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a>.</p>
    </LegalShell>
  );
}
