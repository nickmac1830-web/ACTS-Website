"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type Screenshot = {
  src: string;
  darkSrc: string;
  alt: string;
  label: string;
};

export function ScreenshotCarousel({ screenshots }: { screenshots: Screenshot[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("figure");
    const distance = (firstCard?.offsetWidth ?? 290) + 28;
    rail.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <div className="screenshot-carousel">
      <div className="carousel-toolbar">
        <p><span aria-hidden="true">↔</span> Swipe or scroll through all {screenshots.length} screens</p>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Show previous app screen">
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Show next app screen">
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="screenshot-rail" ref={railRef} role="region" aria-label="ACTS app screen carousel" tabIndex={0}>
        {screenshots.map((shot, index) => (
          <figure key={shot.src}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="phone">
              <Image className="theme-screen-light" src={shot.src} alt={shot.alt} width={942} height={2046} loading="lazy" unoptimized />
              <Image className="theme-screen-dark" src={shot.darkSrc} alt={`${shot.alt.replace("light-mode", "dark-mode")}`} width={942} height={2046} loading="lazy" unoptimized />
            </div>
            <figcaption>{shot.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
