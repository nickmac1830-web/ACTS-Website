import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

const scripts = [
  {
    id: "full-auction",
    title: "Full auction",
    detail: "40 steps · 6 bidders · full auction sequence",
    pdf: "/media/acts-script-full-auction.pdf",
    preview: "/media/script-full-auction-preview.webp",
  },
  {
    id: "negotiation",
    title: "Negotiation scenario",
    detail: "55 steps · vendor bids · negotiation stages",
    pdf: "/media/acts-script-negotiation.pdf",
    preview: "/media/script-negotiation-preview.webp",
  },
  {
    id: "bids-only",
    title: "Bids only",
    detail: "23 steps · focused bid sequence",
    pdf: "/media/acts-script-bids-only.pdf",
    preview: "/media/script-bids-only-preview.webp",
  },
  {
    id: "mental-math",
    title: "Mental math",
    detail: "23 steps · Masters · 4 bidders",
    pdf: "/media/acts-training-script-mental-math.pdf",
    preview: "/media/script-training-mental-math-preview.webp",
  },
  {
    id: "memory",
    title: "Memory drill",
    detail: "19 steps · Moderate · 3 bidders",
    pdf: "/media/acts-training-script-memory.pdf",
    preview: "/media/script-training-memory-preview.webp",
  },
] as const;

export function ScriptShowcase() {
  return (
    <section className="script-section" id="scripts" aria-labelledby="script-heading">
      <div className="script-heading">
        <div>
          <p className="kicker">Generated inside ACTS</p>
          <h2 id="script-heading">Sample scripts. Broader training by design.</h2>
        </div>
        <div className="script-heading-actions">
          <p>
            These five real documents are a sample of the scripts ACTS can generate across auction and training modes. Open any script for a closer look, download the exact one you want, or take the complete sample set.
          </p>
          <a className="gold-button script-download-all" href="/media/acts-sample-script-pack.zip" download>
            <Download size={16} aria-hidden="true" /> Download all five
          </a>
        </div>
      </div>

      <div className="script-stack" aria-label="ACTS sample script collection">
        {scripts.map((script, index) => (
          <article className={`script-card script-card-${index + 1}`} key={script.id}>
            <a
              className="script-preview-link"
              href={script.pdf}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${script.title} sample PDF`}
            >
              <Image src={script.preview} alt={`First page of the ACTS ${script.title} sample`} width={910} height={1287} unoptimized />
              <span className="script-open-cue"><ExternalLink size={14} aria-hidden="true" /> Open PDF</span>
            </a>
            <div className="script-card-footer">
              <span>
                <strong>{script.title}</strong>
                <small>{script.detail}</small>
              </span>
              <a className="script-card-download" href={script.pdf} download aria-label={`Download ${script.title} PDF`}>
                <Download size={15} aria-hidden="true" /> Download
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
