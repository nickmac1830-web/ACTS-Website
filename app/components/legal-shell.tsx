import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type LegalShellProps = {
  title: string;
  eyebrow: string;
  meta: string;
  children: React.ReactNode;
};

export function LegalShell({ title, eyebrow, meta, children }: LegalShellProps) {
  return (
    <main className="legal-page">
      <SiteHeader backLabel="Back to website" />

      <section className="legal-hero">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{meta}</p>
      </section>

      <article className="legal-content">{children}</article>

      <SiteFooter />
    </main>
  );
}
