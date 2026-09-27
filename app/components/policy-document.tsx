import { Fragment } from "react";
import documents from "../../content/legal-documents.json";
import { LegalShell } from "./legal-shell";

// The same versioned text is bundled offline in the iOS and Android app.
function paragraphWithLinks(text: string) {
  return text.split(/(https:\/\/[^\s;]+|actsauctioneertraining@gmail\.com)/g).map((part, index) => {
    if (part === documents.contact) return <a key={index} href={`mailto:${part}`}>{part}</a>;
    if (part.startsWith("https://")) return <a key={index} href={part} target="_blank" rel="noreferrer">{part}</a>;
    return part;
  });
}

export function PolicyDocument({ kind }: { kind: "privacy" | "terms" }) {
  const document = documents[kind];
  return (
    <LegalShell title={document.title} eyebrow={document.subtitle} meta={`Effective date: ${documents.date}`}>
      <p className="legal-intro">{paragraphWithLinks(document.introduction)}</p>
      {document.sections.map((section) => (
        <Fragment key={section.marker}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraphWithLinks(paragraph)}</p>)}
        </Fragment>
      ))}
    </LegalShell>
  );
}
