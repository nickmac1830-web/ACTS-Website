import type { Metadata } from "next";
import { LegalShell } from "../components/legal-shell";
import { ThemeStoragePreferences } from "./theme-storage-preferences";

export const metadata: Metadata = {
  title: "Cookies and Browser Storage | ACTS Auctioneer Training",
  description: "How ACTS uses browser preferences and essential website security cookies.",
};

export default function CookiesPage() {
  return (
    <LegalShell title="Cookies and browser storage" eyebrow="Website privacy" meta="Updated 3 October 2026">
      <p className="legal-intro">ACTS has not added advertising pixels or behavioural analytics trackers to this website. Our app demo, screenshots and fonts are hosted with the website, rather than embedded from social or video platforms.</p>
      <h2>Your theme preference</h2>
      <p>When you use the light/dark button, we save your choice in local storage under <code>acts-website-theme</code>. It contains only “light” or “dark”, stays in this browser and is not sent to ACTS for analytics or advertising. It remains until you clear browser storage or turn off saving below.</p>
      <ThemeStoragePreferences />
      <p>If saving is disabled, <code>acts-website-theme-saving</code> contains “off” solely to remember your request. You can turn saving back on above or clear this website’s data in your browser. Blocking storage does not prevent you from reading the site or changing the theme on the current page.</p>
      <h2>Essential delivery and security</h2>
      <p>Cloudflare and the hosting infrastructure process IP addresses and request information to deliver and protect the website. Cloudflare may set security cookies such as <code>__cf_bm</code>, which supports bot protection and normally expires after 30 minutes of inactivity, or challenge cookies when required. These are for delivery and security, rather than ACTS advertising or cross-site tracking.</p>
      <p>You can block or remove cookies through your browser settings, although blocking essential security cookies may prevent access. See <a href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/" target="_blank" rel="noreferrer">Cloudflare’s cookie information</a> for details of its security mechanisms.</p>
      <h2>Forms, links and future changes</h2>
      <p>The Android tester form asks separately for permission to manage testing access and send testing instructions. It is not a general marketing signup. See our <a href="/privacy">Privacy Policy</a> for the information collected, retention and withdrawal options.</p>
      <p>App Store, social and other external links open services with their own privacy and cookie practices. We do not load their tracking scripts through those links. If optional analytics, advertising or tracking embeds are added later, we will update this information and provide any required consent controls before they run.</p>
      <p>Questions or privacy requests: <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a>.</p>
    </LegalShell>
  );
}
