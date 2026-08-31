import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Contact | ACTS Auctioneer Training",
  description: "Contact ACTS Auctioneer Training for support, feedback and partnerships.",
};

export default function ContactPage() {
  return (
    <LegalShell title="Contact ACTS" eyebrow="Let’s talk" meta="Support, feedback, media and industry enquiries">
      <p className="legal-intro">Whether you need app support, want to share feedback or would like to discuss auctioneer training and industry partnerships, you can contact ACTS directly.</p>

      <div className="contact-panel">
        <p className="kicker">Email</p>
        <h2>actsauctioneertraining@gmail.com</h2>
        <p>This is the current official contact address for ACTS Auctioneer Training.</p>
        <a className="gold-button" href="mailto:actsauctioneertraining@gmail.com?subject=ACTS%20Auctioneer%20Training%20Enquiry">Email ACTS</a>
      </div>

      <h2>App and subscription support</h2>
      <p>For a technical problem or ACTS Pro question, first visit <a href="/support">ACTS Support</a>. If you still need help, include your device model, iOS version, ACTS version and a short description of the issue in your email.</p>

      <h2>Feedback and feature ideas</h2>
      <p>Practical feedback from auctioneers, trainees and real-estate professionals is welcome. Tell us how you use ACTS, which training modes matter most and what would make your practice more effective.</p>

      <h2>Industry, media and partnerships</h2>
      <p>For auctioneer training providers, real-estate agencies, associations, creators, podcasts or media enquiries, use the subject line <strong>ACTS Partnership Enquiry</strong> so your message can be identified quickly.</p>

      <h2>Response information</h2>
      <p>ACTS is currently operated through a single contact inbox. Please allow a reasonable response period, particularly across weekends and public holidays.</p>
    </LegalShell>
  );
}
