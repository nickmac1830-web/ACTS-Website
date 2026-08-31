import Link from "next/link";
import Image from "next/image";

type LegalShellProps = {
  title: string;
  eyebrow: string;
  meta: string;
  children: React.ReactNode;
};

export function LegalShell({ title, eyebrow, meta, children }: LegalShellProps) {
  return (
    <main className="legal-page">
      <header className="site-header legal-header">
        <Link className="brand" href="/" aria-label="ACTS Auctioneer Training home">
          <Image className="brand-logo" src="/media/acts-icon.png" alt="" width={48} height={48} priority unoptimized />
          <span><strong>ACTS</strong><small>Auctioneer Training</small></span>
        </Link>
        <nav aria-label="Legal navigation">
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/billing">Billing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-cta" href="/">Back to website</Link>
      </header>

      <section className="legal-hero">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{meta}</p>
      </section>

      <article className="legal-content">{children}</article>

      <footer>
        <div className="footer-brand">
          <Image className="brand-logo" src="/media/acts-icon.png" alt="" width={48} height={48} unoptimized />
          <div><strong>ACTS</strong><small>Auctioneer Training</small></div>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/billing">Billing</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p>© 2026 Nicholas McIntyre. ACTS: Auctioneer Training.</p>
      </footer>
    </main>
  );
}
