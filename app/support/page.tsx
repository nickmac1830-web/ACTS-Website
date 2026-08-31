import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Support | ACTS Auctioneer Training",
  description: "Help with ACTS Auctioneer Training and ACTS Pro subscriptions.",
};

export default function SupportPage() {
  return (
    <LegalShell title="ACTS Support" eyebrow="Help when you need it" meta="App help, subscriptions and troubleshooting">
      <p className="legal-intro">Get help using ACTS, restoring ACTS Pro or resolving a technical issue. ACTS does not require an account, so most issues can be handled directly on your device.</p>

      <div className="legal-note"><p><strong>Contact support:</strong> <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a></p></div>

      <h2>Quick troubleshooting</h2>
      <ul>
        <li>Confirm you are running the latest version of ACTS from the App Store.</li>
        <li>Close and reopen ACTS, then restart your device if the issue continues.</li>
        <li>Check that your device has an internet connection when making or restoring a purchase.</li>
        <li>If voice control is enabled, confirm microphone and speech-recognition permissions are allowed in iOS Settings.</li>
      </ul>

      <h2>Restore ACTS Pro</h2>
      <p>If you have an active subscription that is not being recognised, open ACTS, go to the membership screen and select <strong>Restore Purchases</strong>. Use the same Apple Account that made the original purchase.</p>

      <h2>Manage a subscription</h2>
      <p>ACTS Pro purchases are processed by Apple. You can view, change or cancel an active subscription through <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">Apple subscription settings</a>. See the <a href="/billing">billing information page</a> for full details.</p>

      <h2>Your training data</h2>
      <p>Training scores, history, scripts, settings and streak information are stored locally on your device. ACTS does not operate a remote user-account system for this information.</p>

      <h2>When contacting us</h2>
      <p>Please include your device model, iOS version, ACTS version, what you were doing when the issue occurred and a screenshot where possible. Do not send payment-card details or Apple Account passwords.</p>
    </LegalShell>
  );
}
