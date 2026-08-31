import Link from "next/link";

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
          <span className="brand-mark">A</span>
          <span><strong>ACTS</strong><small>Auctioneer Training</small></span>
        </Link>
        <nav aria-label="Legal navigation">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/billing">Billing</Link>
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
          <span className="brand-mark">A</span>
          <div><strong>ACTS</strong><small>Auctioneer Training</small></div>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/billing">Billing</Link>
          <a href="mailto:actsauctioneertraining@gmail.com">Contact</a>
        </div>
        <p>© 2026 Nicholas McIntyre. ACTS: Auctioneer Training.</p>
      </footer>
    </main>
  );
}
