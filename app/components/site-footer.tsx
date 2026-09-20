import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <Image className="brand-logo" src="/media/acts-icon.png" alt="" width={48} height={48} unoptimized />
        <div><strong>ACTS</strong><small>Auctioneer Training</small></div>
      </div>
      <div className="footer-links">
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/billing">Billing</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/android-testing">Android Testing</Link>
      </div>
      <p>© 2026 Nicholas McIntyre. ACTS: Auctioneer Training.</p>
    </footer>
  );
}
