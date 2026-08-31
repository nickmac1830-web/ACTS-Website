import {
  Apple,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Download,
  FileText,
  Gauge,
  Mic2,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/au/app/acts-auctioneer-training/id6802531027";
const SUPPORT_URL = "https://nickmac1830-web.github.io/acts-support/";
const PRIVACY_URL =
  "https://nickmac1830-web.github.io/acts-support/privacy.html";
const TERMS_URL = "https://nickmac1830-web.github.io/acts-support/terms.html";
const BILLING_URL =
  "https://nickmac1830-web.github.io/acts-support/billing.html";

const features = [
  {
    icon: Target,
    title: "Realistic auction pressure",
    copy: "Train through changing increments, bidder interactions, auction calls, vendor bids, negotiations and real-world interruptions.",
  },
  {
    icon: Brain,
    title: "Faster mental maths",
    copy: "Build the speed and accuracy to calculate new totals under pressure, from standard increments to competition-level bidding.",
  },
  {
    icon: Mic2,
    title: "Optional voice control",
    copy: "Call bids and auction actions aloud in supported sessions. Voice recognition is processed on device and remains optional.",
  },
  {
    icon: Gauge,
    title: "Training that adapts",
    copy: "Choose the sequence, difficulty, bidders, pace and scenario features to target the exact skill you want to sharpen.",
  },
  {
    icon: FileText,
    title: "Scripts built for practice",
    copy: "Generate detailed auction scripts with bidder columns, totals, call phases, disturbances and reserve-price events.",
  },
  {
    icon: BarChart3,
    title: "Actionable performance data",
    copy: "Review speed, accuracy, memory, timing, flow and consistency—then use targeted recommendations to train what matters next.",
  },
];

const plans = [
  { name: "Weekly", price: "$9", period: "/ week", note: "A flexible entry point" },
  { name: "Monthly", price: "$32", period: "/ month", note: "Consistent training access", featured: true },
  { name: "Annual", price: "$189", period: "/ year", note: "The strongest yearly value", best: true },
];

const screenshots = [
  { src: "/media/hub.webp", alt: "ACTS hub with simulator, drills, activity and script generator", label: "Everything in one training hub" },
  { src: "/media/live-auction.webp", alt: "ACTS live auction number entry and voice controls", label: "Respond in real time" },
  { src: "/media/summary.webp", alt: "ACTS auction performance summary", label: "See the full result" },
  { src: "/media/analytics.webp", alt: "ACTS advanced performance analytics", label: "Find your next improvement" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ACTS Auctioneer Training home">
          <span className="brand-mark">A</span>
          <span>
            <strong>ACTS</strong>
            <small>Auctioneer Training</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pro">ACTS Pro</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          Get ACTS <ArrowRight size={16} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Purpose-built for auctioneers</div>
          <h1>Train your auction call <em>before the crowd arrives.</em></h1>
          <p>
            Build speed, accuracy, memory and composure through realistic auction simulations—where every bid, call and decision happens under pressure.
          </p>
          <div className="hero-actions">
            <a className="app-store-button" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              <Apple size={30} fill="currentColor" aria-hidden="true" />
              <span><small>Download on the</small><strong>App Store</strong></span>
            </a>
            <a className="text-button" href="#demo">Watch the app in action <ArrowDown size={17} /></a>
          </div>
          <ul className="hero-notes" aria-label="App highlights">
            <li><Check size={15} /> Free to download</li>
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
          <div className="metric-card metric-top">
            <span>Accuracy</span><strong>100%</strong>
          </div>
          <div className="metric-card metric-bottom">
            <span>Total score</span><strong>81.6</strong><small>/ 95</small>
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
          {features.map(({ icon: Icon, title, copy }, index) => (
            <article className="feature-card" key={title}>
              <div className="feature-number">0{index + 1}</div>
              <Icon size={26} aria-hidden="true" />
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
          <a className="download-link" href="/media/sample-auction-script.pdf" download>
            <Download size={19} /> Download a sample auction script
          </a>
        </div>
        <div className="video-shell">
          <video controls playsInline preload="metadata" poster="/media/demo-poster.webp">
            <source src="/media/acts-demo.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <p><span aria-hidden="true" /> 34-second ACTS walkthrough</p>
        </div>
      </section>

      <section className="section walkthrough-section">
        <div className="section-heading compact">
          <div>
            <p className="kicker">Inside ACTS</p>
            <h2>From first bid to focused feedback.</h2>
          </div>
          <p>Swipe through the actual app experience.</p>
        </div>
        <div className="screenshot-rail">
          {screenshots.map((shot, index) => (
            <figure key={shot.src}>
              <span>0{index + 1}</span>
              <div className="phone">
                <Image src={shot.src} alt={shot.alt} width={942} height={2046} loading="lazy" unoptimized />
              </div>
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pro-section" id="pro">
        <div className="pro-intro">
          <div className="pro-badge"><span>ACTS</span> PRO</div>
          <p className="kicker">Go further</p>
          <h2>Unlock advanced training and analytical tools.</h2>
          <p>Choose the access period that suits your training. Every plan unlocks the complete ACTS Pro experience.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              {plan.featured && <div className="popular">Most popular</div>}
              {plan.best && <div className="best">Best value</div>}
              <h3>{plan.name}</h3>
              <p className="price"><strong>{plan.price}</strong><span>{plan.period}</span></p>
              <p className="plan-note">{plan.note}</p>
              <ul>
                <li><Check size={17} /> Full access to ACTS Pro</li>
                <li><Check size={17} /> All Pro training tools</li>
                <li><Check size={17} /> Advanced performance insights</li>
                <li><Check size={17} /> Cancel through your App Store account</li>
              </ul>
            </article>
          ))}
        </div>
        <p className="pricing-note">Prices shown in AUD for the Australian App Store. Apple displays the applicable local price before purchase. Subscriptions auto-renew unless cancelled.</p>
        <a className="gold-button" href={APP_STORE_URL} target="_blank" rel="noreferrer">Download ACTS free <ArrowRight size={18} /></a>
      </section>

      <section className="section privacy-callout">
        <ShieldCheck size={34} aria-hidden="true" />
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
          <details><summary>Can I use ACTS without paying?<span>+</span></summary><p>Yes. ACTS is free to download and the standard experience can be used without an ACTS Pro subscription.</p></details>
          <details><summary>Does ACTS require an account?<span>+</span></summary><p>No. There is no ACTS sign-in or account creation process. Your training information is stored locally on your device.</p></details>
          <details><summary>What does ACTS Pro unlock?<span>+</span></summary><p>ACTS Pro unlocks advanced training configurations, analytical insights, pattern analysis, training recommendations and other premium tools shown inside the app.</p></details>
          <details><summary>Is ACTS available outside Australia?<span>+</span></summary><p>ACTS is available through supported App Store regions. Prices and availability are displayed by Apple for your account region.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="kicker">Your next auction starts now</p>
          <h2>Sharper numbers. Better decisions. More confidence under pressure.</h2>
        </div>
        <a className="app-store-button light" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          <Apple size={30} fill="currentColor" aria-hidden="true" />
          <span><small>Download on the</small><strong>App Store</strong></span>
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">A</span>
          <div><strong>ACTS</strong><small>Auctioneer Training</small></div>
        </div>
        <div className="footer-links">
          <a href={SUPPORT_URL} target="_blank" rel="noreferrer">Support</a>
          <a href={PRIVACY_URL} target="_blank" rel="noreferrer">Privacy</a>
          <a href={TERMS_URL} target="_blank" rel="noreferrer">Terms</a>
          <a href={BILLING_URL} target="_blank" rel="noreferrer">Billing</a>
          <a href="mailto:support@actsauctioneer.com">Contact</a>
        </div>
        <p>© 2026 Nicholas McIntyre. ACTS: Auctioneer Training.</p>
      </footer>
    </main>
  );
}
