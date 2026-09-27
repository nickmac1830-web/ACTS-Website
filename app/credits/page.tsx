import { LegalShell } from "../components/legal-shell";

export default function CreditsPage() {
  return (
    <LegalShell title="Licences and Credits" eyebrow="ACTS materials" meta="Updated 27 September 2026">
      <p>© 2026 Nicholas McIntyre. Rights in ACTS original materials are reserved to the extent protected by law. Third-party materials remain subject to their own licences.</p>
      <h2>Website fonts</h2>
      <ul>
        <li><strong>DejaVu Serif:</strong> based on Bitstream Vera, with DejaVu changes. <a href="/licences/DejaVuSerif-LICENSE.txt">Copyright notices and licence</a>.</li>
        <li><strong>Roboto:</strong> Copyright 2011 The Roboto Project Authors. The website’s Fontsource package uses the SIL Open Font License 1.1. <a href="/licences/Roboto-OFL-1.1.txt">Full copyright notice and licence</a>.</li>
      </ul>
      <h2>App software and voice-model credits</h2>
      <p>The iOS and Android app includes third-party software, fonts and local voice-model materials. The bundled notices are available offline in ACTS under Ergonomics → Legal &amp; Licences. App and website font versions can use different licences; the notice shipped with each version governs.</p>
      <h2>Copyright enquiries</h2>
      <p>Contact <a href="mailto:actsauctioneertraining@gmail.com">actsauctioneertraining@gmail.com</a> with the work concerned, its location in ACTS and the basis of your claim. See the <a href="/terms">Terms and Conditions</a> for permitted script use and sharing.</p>
    </LegalShell>
  );
}
