import type { Metadata } from "next";
import { Check, Mail, ShieldCheck, Smartphone, Users } from "lucide-react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TestingSignupForm } from "./testing-signup-form";

export const metadata: Metadata = {
  title: "Android Alpha & Beta Testing | ACTS Auctioneer Training",
  description: "Register your Google Play account to help test ACTS Auctioneer Training on Android.",
};

export default function AndroidTestingPage() {
  return (
    <main className="testing-page">
      <SiteHeader backLabel="Back to ACTS" />

      <section className="testing-hero">
        <div>
          <p className="eyebrow"><Smartphone size={15} /> Android testing program</p>
          <h1>Help shape ACTS on Android.</h1>
          <p>
            We’re inviting auctioneers, real-estate professionals and Android users to test ACTS before its public Google Play release.
          </p>
          <ul>
            <li><Check size={17} /> Free participation</li>
            <li><Check size={17} /> Closed Alpha and Beta registrations</li>
            <li><Check size={17} /> Android 7.0 or later</li>
          </ul>
        </div>
        <aside>
          <Users size={30} aria-hidden="true" />
          <strong>Real testers. Practical feedback.</strong>
          <p>Use the app on your own Android device and tell us what works, what could be clearer and what would improve your auction training.</p>
        </aside>
      </section>

      <section className="testing-content">
        <div className="testing-explainer">
          <p className="kicker">How access works</p>
          <h2>Register first. Install after approval.</h2>
          <ol>
            <li><span>1</span><div><strong>Submit your Google Play email</strong><p>Enter the same Google account used in the Play Store on your Android device.</p></div></li>
            <li><span>2</span><div><strong>ACTS approves your account</strong><p>We add your email to the appropriate Closed Alpha or Beta testing list.</p></div></li>
            <li><span>3</span><div><strong>Receive your private joining link</strong><p>We email the Google Play opt-in link and straightforward installation instructions.</p></div></li>
            <li><span>4</span><div><strong>Join, install and test</strong><p>Opt in, download ACTS from Google Play and use it during the required testing period.</p></div></li>
          </ol>

          <div className="testing-note">
            <ShieldCheck size={24} aria-hidden="true" />
            <div><strong>Your details stay limited to testing.</strong><p>Your information is used to manage access and communicate about ACTS Android testing. It is not a public mailing list.</p></div>
          </div>

          <div className="testing-contact">
            <Mail size={21} aria-hidden="true" />
            <p>Questions? Email <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a>.</p>
          </div>
        </div>

        <TestingSignupForm />
      </section>
      <SiteFooter />
    </main>
  );
}
