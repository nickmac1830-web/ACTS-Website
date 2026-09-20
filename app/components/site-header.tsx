import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const APP_STORE_URL =
  "https://apps.apple.com/au/app/acts-auctioneer-training/id6802531027";

type SiteHeaderProps = {
  home?: boolean;
  backLabel?: string;
};

export function SiteHeader({ home = false, backLabel }: SiteHeaderProps) {
  const root = home ? "" : "/";

  return (
    <header className="site-header">
      <Link className="brand" href={home ? "#top" : "/"} aria-label="ACTS Auctioneer Training home">
        <Image className="brand-logo" src="/media/acts-icon.png" alt="" width={48} height={48} priority unoptimized />
        <span>
          <strong>ACTS</strong>
          <small>Auctioneer Training</small>
        </span>
      </Link>

      <nav aria-label="Primary navigation">
        <Link href={`${root}#features`}>Features</Link>
        <Link href={`${root}#demo`}>Demo</Link>
        <Link href={`${root}#pricing`}>Pricing</Link>
        <Link href={`${root}#faq`}>FAQ</Link>
        <Link href="/android-testing">Android Testing</Link>
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        {backLabel ? (
          <Link className="nav-cta nav-cta-muted" href="/">
            <ArrowLeft size={16} aria-hidden="true" /> {backLabel}
          </Link>
        ) : (
          <a className="nav-cta" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            Get ACTS <ArrowRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </header>
  );
}
