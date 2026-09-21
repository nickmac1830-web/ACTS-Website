"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const LIGHT_TOP = "/media/custom-settings-light-top.jpg";
const LIGHT_BOTTOM = "/media/custom-settings-light-bottom.jpg";
const DARK_TOP = "/media/custom-settings-dark-top.jpg";
const DARK_BOTTOM = "/media/custom-settings-dark-bottom.jpg";

export function CustomAuctionPhone() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let elapsed = 0;
    let previous = performance.now();
    const cycleDuration = 20000;

    const animate = (now: number) => {
      const delta = Math.min(now - previous, 50);
      previous = now;

      if (!pausedRef.current) {
        elapsed = (elapsed + delta) % cycleDuration;
        const progress = elapsed / cycleDuration;
        const position = (1 - Math.cos(progress * Math.PI * 2)) / 2;
        const maximum = scroller.scrollHeight - scroller.clientHeight;
        scroller.scrollTop = maximum * position;
      }

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const pauseTemporarily = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, 3500);
  };

  return (
    <div className="custom-auction-phone-wrap">
      <div className="custom-auction-phone" aria-label="Scrollable ACTS custom auction settings preview">
        <span className="iphone-action-button" aria-hidden="true" />
        <span className="iphone-volume-up" aria-hidden="true" />
        <span className="iphone-volume-down" aria-hidden="true" />
        <div className="custom-auction-screen">
          <span className="dynamic-island" aria-hidden="true" />

          <div className="custom-auction-fixed custom-auction-header" aria-hidden="true">
            <Image className="theme-screen-light" src={LIGHT_BOTTOM} alt="" width={942} height={2046} unoptimized />
            <Image className="theme-screen-dark" src={DARK_BOTTOM} alt="" width={942} height={2046} unoptimized />
          </div>

          <div
            className="custom-auction-scroll"
            ref={scrollRef}
            tabIndex={0}
            onFocus={() => { pausedRef.current = true; }}
            onBlur={() => { pausedRef.current = false; }}
            onPointerEnter={() => { pausedRef.current = true; }}
            onPointerLeave={() => { pausedRef.current = false; }}
            onPointerDown={pauseTemporarily}
            onTouchStart={pauseTemporarily}
            onWheel={pauseTemporarily}
            aria-label="Scroll through the custom auction controls"
          >
            <div className="custom-auction-document">
              <div className="custom-auction-upper-crop">
                <Image className="theme-screen-light" src={LIGHT_TOP} alt="ACTS custom auction features and negotiation settings in light mode" width={942} height={2046} unoptimized />
                <Image className="theme-screen-dark" src={DARK_TOP} alt="ACTS custom auction features and negotiation settings in dark mode" width={942} height={2046} unoptimized />
              </div>
              <div className="custom-auction-lower-crop" aria-hidden="true">
                <Image className="theme-screen-light" src={LIGHT_BOTTOM} alt="" width={942} height={2046} unoptimized />
                <Image className="theme-screen-dark" src={DARK_BOTTOM} alt="" width={942} height={2046} unoptimized />
              </div>
            </div>
          </div>

          <div className="custom-auction-fixed custom-auction-footer" aria-hidden="true">
            <Image className="theme-screen-light" src={LIGHT_BOTTOM} alt="" width={942} height={2046} unoptimized />
            <Image className="theme-screen-dark" src={DARK_BOTTOM} alt="" width={942} height={2046} unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}
