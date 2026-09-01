import {
  Apple,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Brain,
  Camera,
  Check,
  CircleHelp,
  CreditCard,
  Download,
  FileText,
  Gauge,
  LockKeyhole,
  Mail,
  Mic2,
  Play,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";
import { ScreenshotCarousel } from "./components/screenshot-carousel";

const APP_STORE_URL =
  "https://apps.apple.com/au/app/acts-auctioneer-training/id6802531027";

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
  { src: "/media/training.webp", alt: "ACTS memory training session with a live auctioneer prompt", label: "Build memory under pressure" },
  { src: "/media/live-auction.webp", alt: "ACTS live auction number entry and voice controls", label: "Respond in real time" },
  { src: "/media/script-viewer.webp", alt: "ACTS generated auction script with bidders, bid types and running totals", label: "Visualise every auction step" },
  { src: "/media/saved-scripts.webp", alt: "ACTS saved auction scripts ready to visualise or run", label: "Save and repeat key scenarios" },
  { src: "/media/summary.webp", alt: "ACTS auction performance summary", label: "See the full result" },
  { src: "/media/analytics.webp", alt: "ACTS advanced performance analytics", label: "Find your next improvement" },
  { src: "/media/progress.webp", alt: "ACTS progress summary showing score, runtime and improvement over saved runs", label: "Track improvement over time" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ACTS Auctioneer Training home">
          <Image className="brand-logo" src="/media/acts-icon.png" alt="" width={48} height={48} priority unoptimized />
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
            <div className="play-store-soon" aria-label="Google Play coming soon">
              <Play size={23} fill="currentColor" aria-hidden="true" />
              <span><small>Coming soon to</small><strong>Google Play</strong></span>
            </div>
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
          <p>Drag, swipe or use the arrows to explore the actual app experience.</p>
        </div>
        <ScreenshotCarousel screenshots={screenshots} />
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

      <section className="section resource-section" id="support">
        <div className="section-heading compact">
          <div><p className="kicker">Here when you need it</p><h2>Support and important information.</h2></div>
          <p>Everything you need is part of this website—clear, easy to find and kept in one place.</p>
        </div>
        <div className="resource-grid">
          <a href="/support"><CircleHelp size={26} /><span><strong>App support</strong><small>Troubleshooting and subscriptions</small></span><ArrowRight size={18} /></a>
          <a href="/contact"><Mail size={26} /><span><strong>Contact ACTS</strong><small>Questions, feedback and partnerships</small></span><ArrowRight size={18} /></a>
          <a href="/privacy"><LockKeyhole size={26} /><span><strong>Privacy policy</strong><small>How ACTS handles your information</small></span><ArrowRight size={18} /></a>
          <a href="/terms"><Scale size={26} /><span><strong>Terms of use</strong><small>The terms that apply when using ACTS</small></span><ArrowRight size={18} /></a>
          <a href="/billing"><CreditCard size={26} /><span><strong>Billing information</strong><small>Plans, renewals and cancellations</small></span><ArrowRight size={18} /></a>
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
            <Camera size={28} /><strong>Instagram</strong><span>@actsauctioneer</span>
          </a>
          <a href="https://www.tiktok.com/@actsauctioneer" target="_blank" rel="noopener noreferrer" aria-label="Follow ACTS Auctioneer Training on TikTok">
            <Video size={28} /><strong>TikTok</strong><span>@actsauctioneer</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61594208121787" target="_blank" rel="noopener noreferrer" aria-label="Follow ACTS Auctioneer Training on Facebook">
            <Users size={28} /><strong>Facebook</strong><span>Visit page</span>
          </a>
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
        <div className="play-store-soon dark" aria-label="Google Play coming soon">
          <Play size={23} fill="currentColor" aria-hidden="true" />
          <span><small>Coming soon to</small><strong>Google Play</strong></span>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image className="brand-logo" src="/media/acts-icon.png" alt="" width={48} height={48} unoptimized />
          <div><strong>ACTS</strong><small>Auctioneer Training</small></div>
        </div>
        <div className="footer-links">
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/billing">Billing</a>
          <a href="/contact">Contact</a>
        </div>
        <p>© 2026 Nicholas McIntyre. ACTS: Auctioneer Training.</p>
      </footer>
    </main>
  );
}
