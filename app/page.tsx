import {
  Apple,
  ArrowDown,
  ArrowRight,
  Check,
  Play,
} from "lucide-react";
import Image from "next/image";
import { ScriptShowcase } from "./components/script-showcase";
import { ScreenshotCarousel } from "./components/screenshot-carousel";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const APP_STORE_URL =
  "https://apps.apple.com/au/app/acts-auctioneer-training/id6802531027";

const features = [
  {
    title: "Realistic auction pressure",
    copy: "Train through changing increments, bidder interactions, auction calls, vendor bids, negotiations and real-world interruptions.",
  },
  {
    title: "Faster mental maths",
    copy: "Build the speed and accuracy to calculate new totals under pressure, from standard increments to competition-level bidding.",
  },
  {
    title: "Optional voice control",
    copy: "Call bids and auction actions aloud in supported sessions. Voice recognition is processed on device and remains optional.",
  },
  {
    title: "Training that adapts",
    copy: "Choose the sequence, difficulty, bidders, pace and scenario features to target the exact skill you want to sharpen.",
  },
  {
    title: "Scripts built for practice",
    copy: "Generate detailed auction scripts with bidder columns, totals, call phases, disturbances and reserve-price events.",
  },
  {
    title: "Actionable performance data",
    copy: "Review speed, accuracy, memory, timing, flow and consistency—then use targeted recommendations to train what matters next.",
  },
];

const tiers = [
  {
    name: "ACTS Standard",
    label: "Core training",
    description: "A focused foundation for regular auction practice.",
    prices: [
      ["Weekly", "$3"],
      ["Monthly", "$6"],
      ["Annual", "$32"],
    ],
    features: [
      "2 auction difficulty settings",
      "3 focused training modules",
      "Basic review and scoring",
      "Visual practice mode",
    ],
  },
  {
    name: "ACTS Pro",
    label: "Complete toolkit",
    description: "Advanced control, deeper review and more ways to practise.",
    featured: true,
    prices: [
      ["Weekly", "$9"],
      ["Monthly", "$32"],
      ["Annual", "$189"],
    ],
    features: [
      "6 auction difficulty settings",
      "5 focused training modules",
      "Advanced analytical reports",
      "Custom script generation",
      "Save and reopen scripts",
      "Save favourite settings as presets",
      "Visual and audio practice modes",
      "Voice control on supported devices",
    ],
  },
];

const screenshots = [
  { src: "/media/hub.webp", darkSrc: "/media/hub-dark.webp", alt: "ACTS light-mode training hub with simulator, drills, activity and script generator", label: "Everything in one training hub" },
  { src: "/media/setup.webp", darkSrc: "/media/setup-dark.webp", alt: "ACTS light-mode auction simulator settings for sequence, difficulty, bidders and pace", label: "Set up a complete auction" },
  { src: "/media/live-auction.webp", darkSrc: "/media/live-auction-dark.webp", alt: "ACTS light-mode live auction simulator with number entry and optional voice control", label: "Run the auction in real time" },
  { src: "/media/training-settings.webp", darkSrc: "/media/training-settings-dark.webp", alt: "ACTS light-mode training settings with sequence, difficulty, memory time, bid range, bidders and mode", label: "Fine-tune every training drill" },
  { src: "/media/training.webp", darkSrc: "/media/training-dark.webp", alt: "ACTS light-mode memory training screen with a live bidder prompt", label: "Build memory under pressure" },
  { src: "/media/script-viewer.webp", darkSrc: "/media/script-viewer-dark.webp", alt: "ACTS light-mode auction script with bidders, bid types and running totals", label: "Visualise every auction step" },
  { src: "/media/summary.webp", darkSrc: "/media/summary-dark.webp", alt: "ACTS light-mode auction summary with score, timing and accuracy", label: "See the full result" },
  { src: "/media/analytics.webp", darkSrc: "/media/analytics-dark.webp", alt: "ACTS light-mode performance web comparing core auction skills", label: "Find your next improvement" },
  { src: "/media/progress.webp", darkSrc: "/media/progress-dark.webp", alt: "ACTS light-mode progress summary showing average score and runtime", label: "Track improvement over time" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader home />

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">Purpose-built for auctioneers</div>
          <h1>Train your auction call <em>before the crowd arrives.</em></h1>
          <p>
            Build speed, accuracy, memory and composure through realistic auction simulations—where every bid, call and decision happens under pressure.
          </p>
          <div className="hero-actions">
            <a className="app-store-button" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              <Apple size={26} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
              <span><small>Download on the</small><strong>App Store</strong></span>
            </a>
            <a className="play-store-soon play-store-link" href="/android-testing" aria-label="Join ACTS Android testing">
              <Play size={20} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
              <span><small>Join the</small><strong>Android Test</strong></span>
            </a>
            <a className="text-button" href="#demo">Watch the app in action <ArrowDown size={17} /></a>
          </div>
          <ul className="hero-notes" aria-label="App highlights">
            <li><Check size={15} /> Free to download. Paid access required.</li>
            <li><Check size={15} /> No account required</li>
            <li><Check size={15} /> iPhone &amp; iPad</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="ACTS app preview">
          <div className="phone phone-hero">
            <Image
              src="/media/splash.webp"
              alt="ACTS Auctioneer Training start screen"
              width={942}
              height={2046}
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="principles" aria-label="ACTS training approach">
        <div><span>01</span><strong>Train</strong><small>Real scenarios. Repeatable practice.</small></div>
        <div><span>02</span><strong>Analyse</strong><small>Measure the moments that matter.</small></div>
        <div><span>03</span><strong>Improve</strong><small>Turn feedback into your next session.</small></div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading">
          <div>
            <p className="kicker">Built for the craft</p>
            <h2>A training room that fits in your pocket.</h2>
          </div>
          <p>ACTS gives developing and experienced auctioneers a dedicated place to practise the numbers, sequence and pressure—not just the words.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ title, copy }, index) => (
            <article className="feature-card" key={title}>
              <div className="feature-number">0{index + 1}</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="demo-copy">
          <p className="kicker">See the pressure. See the process.</p>
          <h2>One auction. Dozens of decisions.</h2>
          <p>
            Set the difficulty, bidder count, pace and auction features. Then work through the sequence as totals change, bidders respond and real auction events demand a decision.
          </p>
          <div className="demo-points">
            <div><span>43</span><p>steps in the included competition-level sample script</p></div>
            <div><span>3</span><p>bidders with distinct interactions and bid types</p></div>
            <div><span>1</span><p>clear performance review at the end of the session</p></div>
          </div>
          <a className="download-link" href="#scripts">
            <ArrowDown size={18} /> Explore the sample auction scripts
          </a>
        </div>
        <div className="iphone-demo-wrap">
          <div className="iphone-demo" aria-label="ACTS walkthrough shown inside an iPhone 17 Pro Max frame">
            <span className="iphone-action-button" aria-hidden="true" />
            <span className="iphone-volume-up" aria-hidden="true" />
            <span className="iphone-volume-down" aria-hidden="true" />
            <div className="iphone-demo-screen">
              <span className="dynamic-island" aria-hidden="true" />
              <video controls playsInline preload="metadata" poster="/media/demo-poster.webp">
                <source src="/media/acts-demo.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </div>
          <p className="iphone-demo-caption"><span aria-hidden="true" /> 34-second ACTS walkthrough</p>
        </div>
      </section>

      <section className="section walkthrough-section">
        <div className="section-heading compact">
          <div>
            <p className="kicker">Inside ACTS</p>
            <h2>From first bid to focused feedback.</h2>
          </div>
          <p>Drag, swipe or use the arrows to explore the actual app experience.</p>
        </div>
        <ScreenshotCarousel screenshots={screenshots} />
      </section>

      <ScriptShowcase />

      <section className="pricing-section" id="pricing">
        <div className="pricing-intro">
          <p className="kicker">Choose your training level</p>
          <h2>Start focused. Go further when you are ready.</h2>
          <p>Both memberships provide paid access to ACTS. Standard covers the core routine; Pro opens the complete training and review toolkit.</p>
        </div>

        <div className="tier-grid">
          {tiers.map((tier) => (
            <article className={`tier-card ${tier.featured ? "featured" : ""}`} key={tier.name}>
              {tier.featured && <div className="popular">Complete toolkit</div>}
              <p className="tier-label">{tier.label}</p>
              <h3>{tier.name}</h3>
              <p className="tier-description">{tier.description}</p>
              <div className="billing-list" aria-label={`${tier.name} pricing in Australian dollars`}>
                {tier.prices.map(([billing, price]) => (
                  <div key={billing}>
                    <span>{billing}</span>
                    <strong>{price}</strong>
                    <small>AUD</small>
                  </div>
                ))}
              </div>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}><Check size={17} aria-hidden="true" /> {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pricing-note">Prices shown in AUD for the Australian App Store. Apple confirms the final price before purchase. Subscriptions auto-renew unless cancelled. Voice control requires a supported device; manual controls remain available.</p>
        <a className="gold-button" href={APP_STORE_URL} target="_blank" rel="noreferrer">View ACTS on the App Store <ArrowRight size={18} /></a>
      </section>

      <section className="section privacy-callout">
        <div>
          <p className="kicker">Training without the data grab</p>
          <h2>Your training stays on your device.</h2>
        </div>
        <p>ACTS requires no account. Auction scripts, scores, bid history, settings and training results are stored locally. Optional voice control uses on-device Apple speech recognition.</p>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading compact">
          <div><p className="kicker">Questions</p><h2>Before your first call.</h2></div>
        </div>
        <div className="faq-list">
          <details><summary>Who is ACTS designed for?<span>+</span></summary><p>ACTS is designed for trainee, practising and competition auctioneers, as well as real-estate professionals building stronger auction numeracy and sequence confidence.</p></details>
          <details><summary>Can I use ACTS without paying?<span>+</span></summary><p>ACTS is free to download, but a paid Standard or Pro subscription is required for access. The app shows the available plan and billing options before you purchase.</p></details>
          <details><summary>Does ACTS require an account?<span>+</span></summary><p>No. There is no ACTS sign-in or account creation process. Your training information is stored locally on your device.</p></details>
          <details><summary>What is included in ACTS Standard?<span>+</span></summary><p>Standard includes two auction difficulty settings, three training modules, basic review and scoring, and visual practice mode.</p></details>
          <details><summary>What does ACTS Pro unlock?<span>+</span></summary><p>ACTS Pro unlocks advanced training configurations, analytical insights, pattern analysis, training recommendations and other premium tools shown inside the app.</p></details>
          <details><summary>Will voice control work on every device?<span>+</span></summary><p>No. Voice control is a Pro feature on supported devices and depends on compatible speech-recognition services and hardware. Manual controls remain available.</p></details>
          <details><summary>Is ACTS available outside Australia?<span>+</span></summary><p>ACTS is available through supported App Store regions. Prices and availability are displayed by Apple for your account region.</p></details>
        </div>
      </section>

      <section className="section resource-section" id="support">
        <div className="section-heading compact">
          <div><p className="kicker">Here when you need it</p><h2>Support and important information.</h2></div>
          <p>Everything you need is part of this website—clear, easy to find and kept in one place.</p>
        </div>
        <div className="resource-grid">
          <a href="/support"><span><strong>App support</strong><small>Troubleshooting and subscriptions</small></span><ArrowRight size={18} /></a>
          <a href="/contact"><span><strong>Contact ACTS</strong><small>Questions, feedback and partnerships</small></span><ArrowRight size={18} /></a>
          <a href="/privacy"><span><strong>Privacy policy</strong><small>How ACTS handles your information</small></span><ArrowRight size={18} /></a>
          <a href="/terms"><span><strong>Terms of use</strong><small>The terms that apply when using ACTS</small></span><ArrowRight size={18} /></a>
          <a href="/billing"><span><strong>Billing information</strong><small>Plans, renewals and cancellations</small></span><ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="social-section" aria-labelledby="social-heading">
        <div>
          <p className="kicker">ACTS in the community</p>
          <h2 id="social-heading">Follow the training beyond the app.</h2>
          <p>Follow ACTS for auction drills, quick challenges, product demonstrations and weekend auction insights.</p>
        </div>
        <div className="social-grid" aria-label="ACTS social media profiles">
          <a href="https://www.instagram.com/actsauctioneer" target="_blank" rel="noopener noreferrer" aria-label="Follow ACTS Auctioneer Training on Instagram">
            <strong>Instagram</strong><span>@actsauctioneer</span>
          </a>
          <a href="https://www.tiktok.com/@actsauctioneer" target="_blank" rel="noopener noreferrer" aria-label="Follow ACTS Auctioneer Training on TikTok">
            <strong>TikTok</strong><span>@actsauctioneer</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61594208121787" target="_blank" rel="noopener noreferrer" aria-label="Follow ACTS Auctioneer Training on Facebook">
            <strong>Facebook</strong><span>Visit page</span>
          </a>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker">Your next auction starts now</p>
          <h2>Sharper numbers. Better decisions. More confidence under pressure.</h2>
          <p className="final-cta-note">Free to download. A paid subscription is required for access.</p>
        </div>
        <a className="app-store-button light" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          <Apple size={26} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
          <span><small>Download on the</small><strong>App Store</strong></span>
        </a>
        <a className="play-store-soon play-store-link dark" href="/android-testing" aria-label="Join ACTS Android testing">
          <Play size={20} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
          <span><small>Join the</small><strong>Android Test</strong></span>
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
