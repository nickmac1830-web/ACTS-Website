import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | ACTS Auctioneer Training",
  description: "Privacy Policy for ACTS: Auctioneer Training.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" eyebrow="Your information" meta="Effective date: 31 August 2026">
      <p className="legal-intro">ACTS: Auctioneer Training (“ACTS”) is an auctioneer training and simulation application operated by Nicholas McIntyre. This policy explains how information is handled when you use ACTS.</p>

      <h2>Information ACTS Processes</h2>
      <p>ACTS does not require an account. ACTS does not ask users to provide their name, email address, phone number, contacts, precise location, photographs, camera access or advertising identifier as part of normal app use.</p>
      <p>If you contact ACTS for support, ACTS will receive the information you voluntarily provide, such as your email address and the contents of your support request.</p>

      <h2>Training Information</h2>
      <p>Training information generated through ACTS may include auction scripts, practice results, scores, bid history, timing information, streaks, settings and preferences. This information is stored locally on your device. ACTS does not transmit it to an ACTS-operated server or provide it to RevenueCat, advertisers or data brokers.</p>

      <h2>Microphone and Speech Recognition</h2>
      <p>ACTS includes an optional voice-control feature that can recognise spoken bids and auction commands. If you enable it, ACTS requests permission to access your device’s microphone and speech-recognition capability.</p>
      <p>Voice recognition is configured to use Apple’s on-device speech-recognition technology. Raw microphone recordings are not retained by ACTS and are not uploaded to an ACTS server, RevenueCat or a third-party advertising service. Recognised commands are used on the device to operate the auction session.</p>
      <p>Microphone access is optional. You may decline or revoke microphone and speech-recognition permission through device settings and continue using ACTS with manual controls.</p>

      <h2>Text-to-Speech</h2>
      <p>ACTS may generate spoken auction-training responses using locally bundled text-to-speech technology. Processing occurs on the device and does not require ACTS to upload training history or auction scripts to an external speech provider.</p>

      <h2>Subscriptions and Purchases</h2>
      <p>ACTS Pro subscriptions are processed through Apple’s In-App Purchase system. ACTS does not receive or store full payment-card or bank-account details.</p>
      <p>ACTS uses RevenueCat to validate purchases and manage ACTS Pro access. Apple and RevenueCat may process an anonymous or pseudonymous app-user identifier, product identifiers, purchase history, transaction and subscription status, transaction dates, receipt or signed verification information, and entitlement status.</p>
      <p>This limited information is used to validate purchases, prevent fraud, provide and restore ACTS Pro access, and understand subscription performance. ACTS does not send locally stored auction or training history to RevenueCat.</p>
      <p>See <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noreferrer">RevenueCat’s privacy policy</a> and <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple’s privacy policy</a>.</p>

      <h2>Analytics, Advertising and Sharing</h2>
      <p>ACTS does not use third-party advertising networks or behavioural-tracking services, sell personal information, or track users across apps or websites owned by other companies. RevenueCat provides limited subscription analytics for app functionality and subscription analysis—not advertising.</p>
      <p>Apple processes information required to provide App Store and payment services. RevenueCat processes the limited subscription information described above as a service provider. Apple and RevenueCat may process information outside Australia under their respective practices.</p>

      <h2>Data Retention and Deletion</h2>
      <p>Training information remains locally on your device until removed through ACTS, the app’s local data is cleared, or ACTS is removed. Because ACTS does not maintain a remote training database, it cannot remotely access or delete that locally stored information.</p>
      <p>Deleting ACTS does not automatically cancel a subscription or remove purchase records maintained by Apple or RevenueCat. Manage subscriptions through <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noreferrer">your Apple account</a>.</p>

      <h2>Security</h2>
      <p>ACTS uses the security and application-sandboxing protections provided by iOS for locally stored information. No electronic storage or processing method can be guaranteed completely secure.</p>

      <h2>Children’s Privacy</h2>
      <p>ACTS is an auctioneer-training tool and is not directed to children under 13. ACTS does not knowingly collect personal information from children.</p>

      <h2>Your Choices</h2>
      <p>You may control microphone and speech-recognition access in device settings, remove locally stored training information through ACTS, uninstall the app, and manage or cancel subscriptions through your Apple account.</p>

      <h2>Changes to This Policy</h2>
      <p>This policy may be updated when ACTS features, service providers or data practices change. The effective date above identifies the latest version.</p>

      <h2>Contact</h2>
      <p>Questions can be directed to Nicholas McIntyre at <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a>.</p>
    </LegalShell>
  );
}
