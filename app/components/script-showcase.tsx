"use client";

import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { useState } from "react";

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
] as const;

export function ScriptShowcase() {
  const [selectedId, setSelectedId] = useState<(typeof scripts)[number]["id"]>("full-auction");
  const selected = scripts.find((script) => script.id === selectedId) ?? scripts[0];

  return (
    <section className="script-section" id="scripts" aria-labelledby="script-heading">
      <div className="script-heading">
        <div>
          <p className="kicker">Generated inside ACTS</p>
          <h2 id="script-heading">See the script before you run the room.</h2>
        </div>
        <p>
          ACTS can build different scripts for different sessions. Select a document to inspect the real PDF, open it full screen or download it for practice.
        </p>
      </div>

      <div className="script-showcase">
        <div className="script-stack" aria-label="Choose a sample ACTS script">
          {scripts.map((script, index) => (
            <button
              className={`script-card script-card-${index + 1}${selected.id === script.id ? " selected" : ""}`}
              type="button"
              key={script.id}
              onClick={() => setSelectedId(script.id)}
              aria-pressed={selected.id === script.id}
              aria-label={`Preview ${script.title} script`}
            >
              <Image src={script.preview} alt="" width={760} height={1075} unoptimized />
              <span><strong>{script.title}</strong><small>{script.detail}</small></span>
            </button>
          ))}

          <div className="script-card script-card-4 script-card-coming" aria-label="Training script coming next">
            <span className="script-card-index">04</span>
            <div>
              <small>Next sample</small>
              <strong>Training script</strong>
              <p>Ready to add when the fourth script is supplied.</p>
            </div>
          </div>
        </div>

        <div className="script-viewer-panel">
          <div className="script-switcher" aria-label="Select a sample script">
            {scripts.map((script, index) => (
              <button
                type="button"
                key={script.id}
                className={selected.id === script.id ? "active" : ""}
                onClick={() => setSelectedId(script.id)}
                aria-pressed={selected.id === script.id}
              >
                <span>0{index + 1}</span> {script.title}
              </button>
            ))}
          </div>
          <div className="script-viewer-heading">
            <div>
              <span>Selected sample</span>
              <strong>{selected.title}</strong>
              <small>{selected.detail}</small>
            </div>
            <span className="script-format">PDF</span>
          </div>
          <iframe
            key={selected.pdf}
            className="script-pdf"
            src={`${selected.pdf}#view=FitH&toolbar=0&navpanes=0`}
            title={`${selected.title} ACTS sample PDF`}
            loading="lazy"
          />
          <div className="script-actions">
            <a className="gold-button" href={selected.pdf} download>
              <Download size={16} aria-hidden="true" /> Download PDF
            </a>
            <a className="script-open-link" href={selected.pdf} target="_blank" rel="noreferrer">
              Open full screen <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
