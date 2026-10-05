import React, { useEffect, useRef } from "react";
import "./styles/portfolio.css";
function Header() {
  return (
    <>
      <header className="mc-nav">
        <a
          href="#mc-start"
          className="mc-logo"
          aria-label="Miguel Caparas home"
        >
          mc<span className="mc-logo-dot" aria-hidden="true"></span>
        </a>
        <nav className="mc-nav-links" aria-label="Portfolio navigation">
          <a href="#mc-work">The work</a>
          <a href="#mc-experience">Experience</a>
          <a href="#mc-contact">
            Say hello <span className="mc-nav-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
    </>
  );
}
function Hero() {
  return (
    <>
      <div className="mc-topline">
        <p className="mc-small">Miguel Caparas</p>
        <p className="mc-small">Pasig, Philippines</p>
      </div>
      <section className="mc-hero" id="mc-start" aria-labelledby="mc-title">
        <h1 id="mc-title" aria-label="I make IT work.">
          <span className="mc-hero-line" aria-hidden="true">
            <span>I make</span>
          </span>
          <span className="mc-hero-line mc-hero-line--blue" aria-hidden="true">
            <span>IT work.</span>
          </span>
        </h1>
        <div className="mc-hero-copy">
          <h2>
            Systems. People.
            <br />
            Everyday operations.
          </h2>
          <p>
            I’m <span className="mc-intro-name">Miguel Caparas</span>, an IT
            Manager at Pointblue by Aboitizland. I lead implementation and
            operations, improve infrastructure, and turn data and AI into
            practical tools for the business. PSM Certified.
          </p>
          <a className="mc-link" href="#mc-work">
            GET TO KNOW MY WORK{" "}
            <span className="mc-arrow" aria-hidden="true">
              ↘
            </span>
          </a>
          <a
            className="mc-link mc-resume-link"
            href={`${process.env.PUBLIC_URL}/Resume - Caparas.pdf`}
            download="Resume - Caparas.pdf"
          >
            DOWNLOAD RESUME{" "}
            <span className="mc-arrow" aria-hidden="true">↘</span>
          </a>
        </div>
      </section>
      <div className="mc-hero-foot">
        <p className="mc-small">IT management / Systems implementation</p>
        <p className="mc-small">Pointblue by Aboitizland · Since 2025</p>
      </div>
    </>
  );
}
function Achievements() {
  return (
    <>
      <div className="mc-proof" aria-label="Selected professional achievements">
        <div>
          <span className="mc-proof-value">1,000+</span>
          <span className="mc-proof-label">Users across the Collo rollout</span>
        </div>
        <div>
          <span className="mc-proof-value">6</span>
          <span className="mc-proof-label">
            Departments in the implementation
          </span>
        </div>
        <div>
          <span className="mc-proof-value">50%</span>
          <span className="mc-proof-label">Reduction in support tickets</span>
        </div>
        <div>
          <span className="mc-proof-value">~₱500K</span>
          <span className="mc-proof-label">
            Annual Workspace license savings
          </span>
        </div>
      </div>
    </>
  );
}
const workAnimations = new WeakMap();

function animateWork(event) {
  event.preventDefault();

  const summary = event.currentTarget;
  const row = summary.parentElement;
  const previous = workAnimations.get(row);
  const expanding = !(previous ? previous.expanding : row.open);
  const startHeight = row.getBoundingClientRect().height;

  if (previous) previous.animation.cancel();

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    typeof row.animate !== "function"
  ) {
    row.open = expanding;
    delete row.dataset.mcAnimating;
    delete row.dataset.mcExpanded;
    workAnimations.delete(row);
    return;
  }

  // Keep the content present until the closing animation finishes.
  row.open = true;
  row.dataset.mcExpanded = String(expanding);
  row.dataset.mcAnimating = "true";

  const styles = window.getComputedStyle(row);
  const borders =
    parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);
  const endHeight = expanding
    ? row.getBoundingClientRect().height
    : summary.getBoundingClientRect().height + borders;

  const animation = row.animate(
    [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
    {
      duration: 360,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "both",
    }
  );

  workAnimations.set(row, { animation, expanding });

  animation.onfinish = () => {
    if (workAnimations.get(row)?.animation !== animation) return;
    row.open = expanding;
    animation.cancel();
    delete row.dataset.mcAnimating;
    delete row.dataset.mcExpanded;
    workAnimations.delete(row);
  };
}

function SelectedWork() {
  return (
    <>
      <section className="mc-work" id="mc-work" aria-labelledby="mc-work-title">
        <div className="mc-section-head">
          <div>
            <p className="mc-small">Selected work / Point Blue</p>
            <h2 className="mc-section-title" id="mc-work-title">
              The work.
            </h2>
          </div>
          <p className="mc-section-note">
            From a cross-department rollout to better everyday decisions.
          </p>
        </div>
        <details className="mc-project-row">
          <summary onClick={animateWork}>
            <span className="mc-index" aria-hidden="true">
              01
            </span>
            <span className="mc-row-title">
              <span className="mc-row-heading" role="heading" aria-level="3">
                Collo deployment
              </span>
              <span className="mc-small">Systems implementation</span>
            </span>
            <span className="mc-row-summary">
              Led a property management system rollout—from requirements and
              migration to onboarding, go-live, and stabilization.
            </span>
            <span className="mc-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="mc-row-details">
            <p>
              <strong>My role</strong>Implementation lead, coordinating business
              teams and the vendor. Managed due diligence, privacy checks, data
              migration, go-live planning, and hypercare across six departments
              and 1,000+ users.
            </p>
            <p>
              <strong>After launch</strong>Managed software issues, tenant
              expectations, bugs, user feedback, vendor coordination, and
              improvement requests.
            </p>
          </div>
        </details>
        <details className="mc-project-row">
          <summary onClick={animateWork}>
            <span className="mc-index" aria-hidden="true">
              02
            </span>
            <span className="mc-row-title">
              <span className="mc-row-heading" role="heading" aria-level="3">
                Bookings &
                <br />
                occupancy
              </span>
              <span className="mc-small">Analytics & AI</span>
            </span>
            <span className="mc-row-summary">
              AI-assisted company data workflows, daily booking reports, and
              occupancy models for forecasting and target setting.
            </span>
            <span className="mc-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="mc-row-details">
            <p>
              <strong>Company data & AI</strong>Created an AI-assisted
              workflow to store and organize company data, making analytics,
              forecasting, and target setting easier.
            </p>
            <p>
              <strong>Daily reporting</strong>Scheduled OpenAI output sent to
              management and sales to track bookings against monthly targets.
              Reporting uses dashboards, Google Sheets, and system exports.
            </p>
            <p>
              <strong>Annual planning</strong>Built occupancy forecasts and
              target-setting models using bookings, renewals, move-outs, and
              rate analysis to support budgeting and management decisions.
            </p>
          </div>
        </details>
        <details className="mc-project-row">
          <summary onClick={animateWork}>
            <span className="mc-index" aria-hidden="true">
              03
            </span>
            <span className="mc-row-title">
              <span className="mc-row-heading" role="heading" aria-level="3">
                Network
                <br />
                improvements
              </span>
              <span className="mc-small">Infrastructure & security</span>
            </span>
            <span className="mc-row-summary">
              Application restrictions, bandwidth upgrades, and minor
              rehabilitation work. Support tickets reduced by 50%.
            </span>
            <span className="mc-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="mc-row-details">
            <p>
              <strong>What changed</strong>Enabled application restrictions for
              security, upgraded bandwidth, and carried out minor network
              rehabilitation work.
            </p>
            <p>
              <strong>Reported outcome</strong>A 50% reduction in support
              tickets.
            </p>
          </div>
        </details>
      </section>
    </>
  );
}
function Experience() {
  return (
    <>
      <section
        className="mc-experience"
        id="mc-experience"
        aria-labelledby="mc-experience-title"
      >
        <div className="mc-width mc-experience-layout">
          <div>
            <p className="mc-small">Experience / 2025 — Present</p>
            <h2 id="mc-experience-title">
              Hands-on roots.
              <br />
              Operational
              <br />
              ownership.
            </h2>
            <p className="mc-company">
              Pointblue by Aboitizland
              <br />
              Manila, Philippines
            </p>
          </div>
          <div>
            <article className="mc-role">
              <p className="mc-small">April 2025 — Present</p>
              <h3>
                IT Manager /<br />
                Systems Implementation Lead
              </h3>
              <p>
                Lead implementation, vendor coordination, and IT service
                delivery. Manage approximately ₱11M in annual IT budgeting,
                Google Workspace governance, access reviews, and license
                optimization.
              </p>
            </article>
            <article className="mc-role">
              <p className="mc-small">January 2025 — April 2025</p>
              <h3>Developer</h3>
              <p>
                Joined Point Blue as a developer before progressing into IT
                management and systems implementation.
              </p>
            </article>
            <p className="mc-internal">
              Built a Google Apps Script ticketing system for 50+ staff.
              Improved legacy property management UI flows, queries, and
              security deposit tracking.
            </p>
            <br></br>
             <article className="mc-role">
              <p className="mc-small">March 2024 · Bridge360 IT Solutions</p>
              <h3>Full Stack Developer Intern</h3>
              <p>
                Independently developed a job-hunting application for employers
                and job seekers using React and Node.js, handling both frontend
                and backend development.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
function Gastos() {
  const showcaseRef = useRef(null);
  const imageBase = `${process.env.PUBLIC_URL}/assets/gastos`;
  const featuredScreens = [
    { file: "overview.png", title: "Overview", description: "Balances, spending, and upcoming bills in one view." },
    { file: "budget.png", title: "Budget & savings", description: "Monthly spending targets and savings allocations." },
    { file: "quick-add.png", title: "Quick Add", description: "Record expenses, income, transfers, and savings." },
  ];
  const extraScreens = [
    { file: "transactions.png", title: "Transactions", description: "Filter activity by period, type, account, and category." },
    { file: "accounts.png", title: "Accounts", description: "Track cash, savings, credit cards, and debt." },
    { file: "category-budgets.png", title: "Category budgets", description: "Compare spending with each category’s monthly target." },
  ];

  useEffect(() => {
    const section = showcaseRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || motion.matches || !("IntersectionObserver" in window)) return;

    const animations = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (motion.matches || typeof entry.target.animate !== "function") return;
        animations.push(entry.target.animate(
          [
            { opacity: 0, transform: "translateY(12px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 500,
            delay: Number(entry.target.dataset.gastosReveal || 0) * 80,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "backwards",
          }
        ));
      });
    }, { threshold: 0.1 });

    section.querySelectorAll("[data-gastos-reveal]").forEach((element) => observer.observe(element));
    const stopMotion = () => {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      motion.removeEventListener("change", stopMotion);
    };
  }, []);

  const renderScreen = (screen, index) => (
    <figure className="mc-gastos-screen" key={screen.file} data-gastos-reveal={index}>
      <a
        className="mc-gastos-screen-link"
        href={`${imageBase}/${screen.file}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View Gastos ${screen.title} screenshot at full size (opens in a new tab)`}
      >
        <img
          src={`${imageBase}/${screen.file}`}
          alt={`Gastos ${screen.title} screen`}
          loading="lazy"
          decoding="async"
        />
      </a>
      <figcaption>
        <h4>{screen.title}</h4>
        <p>{screen.description}</p>
      </figcaption>
    </figure>
  );

  return (
    <section
      ref={showcaseRef}
      className="mc-independent mc-gastos-showcase"
      id="mc-gastos"
      aria-labelledby="mc-independent-title"
    >
      <p className="mc-small">Independent project / Designed &amp; developed by me</p>
      <h2 className="mc-section-title" id="mc-independent-title">A project I live with.</h2>

      <article className="mc-gastos" data-gastos-reveal="0">
        <div className="mc-gastos-title">
          <p className="mc-small">Personal finance application</p>
          <h3>Gastos.</h3>
          <p>DEPLOYED &amp; IN PERSONAL USE</p>
        </div>
        <div className="mc-gastos-copy">
          <h3>A clearer view of everyday finances.</h3>
          <p>
            I designed and developed Gastos independently to manage expenses,
            transfers, budgets, recurring bills, and savings allocations.
            I use the deployed app to manage my own finances.
          </p>
          <p className="mc-small mc-gastos-ownership">My role / Design, development &amp; deployment</p>
        </div>
      </article>

      <div className="mc-gastos-gallery-heading">
        <h3>Inside the app.</h3>
        <p>Open any screenshot to see it at full size.</p>
      </div>
      <p className="mc-gastos-swipe">Swipe to explore all three screens ↔</p>
      <div className="mc-gastos-screens" role="group" aria-label="Featured Gastos screenshots">
        {featuredScreens.map(renderScreen)}
      </div>

      <div className="mc-gastos-highlights" aria-label="Key Gastos features">
        <div data-gastos-reveal="0">
          <span className="mc-small">01 / Track</span>
          <h3>Expenses &amp; transfers</h3>
          <p>Record money coming in, going out, and moving between accounts.</p>
        </div>
        <div data-gastos-reveal="1">
          <span className="mc-small">02 / Plan</span>
          <h3>Budget allocation</h3>
          <p>Set monthly category targets and compare them with actual spending.</p>
        </div>
        <div data-gastos-reveal="2">
          <span className="mc-small">03 / Save</span>
          <h3>Savings goals</h3>
          <p>Allocate savings toward goals and track unallocated funds.</p>
        </div>
      </div>

      <details className="mc-gastos-more">
        <summary>More screens <span aria-hidden="true">+</span></summary>
        <div className="mc-gastos-screens" role="group" aria-label="Additional Gastos screenshots">
          {extraScreens.map(renderScreen)}
        </div>
      </details>
    </section>
  );
}
function Credentials() {
  return (
    <>
      <div className="mc-credentials">
        <p>
          <strong>Mapúa University</strong>B.S. Information Technology · Magna
          Cum Laude
        </p>
        <p>
          <strong>Professional Scrum Master I</strong>Scrum.org · 2025
        </p>
      </div>
    </>
  );
}
function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const section = contactRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || motion.matches || !("IntersectionObserver" in window)) return;

    const animations = [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        if (motion.matches) return;

        const reveal = (element, frames, delay, duration = 500) => {
          if (!element || typeof element.animate !== "function") return;
          animations.push(
            element.animate(frames, {
              duration,
              delay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            })
          );
        };

        const shift = window.matchMedia("(max-width: 760px)").matches ? 8 : 12;
        const fadeFrames = [
          { opacity: 0, transform: `translateY(${shift}px)` },
          { opacity: 1, transform: "translateY(0)" },
        ];

        reveal(section.querySelector(".mc-contact-eyebrow"), fadeFrames, 0);
        section.querySelectorAll(".mc-contact-line > span").forEach((line, index) => {
          reveal(
            line,
            [{ transform: "translateY(120%)" }, { transform: "translateY(0)" }],
            100 + index * 120,
            650
          );
        });
        reveal(section.querySelector(".mc-contact-bottom > p"), fadeFrames, 300);
        section.querySelectorAll(".mc-contact-links > a").forEach((link, index) => {
          reveal(link, fadeFrames, 380 + index * 80);
        });
      },
      { threshold: 0.15 }
    );

    const stopMotion = () => {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
    observer.observe(section);
    motion.addEventListener("change", stopMotion);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      motion.removeEventListener("change", stopMotion);
    };
  }, []);

  return (
    <section
      ref={contactRef}
      className="mc-contact"
      id="mc-contact"
      aria-labelledby="mc-contact-title"
    >
      <p className="mc-small mc-contact-eyebrow">Have a role in mind?</p>
      <h2 id="mc-contact-title" aria-label="Let’s make things work.">
        <span className="mc-contact-line" aria-hidden="true">
          <span>Let’s make</span>
        </span>
        <span className="mc-contact-line" aria-hidden="true">
          <span>things work.</span>
        </span>
      </h2>
      <div className="mc-contact-bottom">
        <p>
          For IT management and systems implementation opportunities, reach
          out by email or connect on LinkedIn.
        </p>
        <div className="mc-contact-links">
          <a className="mc-link" href="mailto:juanmiguelcaparas76@gmail.com">
            EMAIL ME{" "}
            <span className="mc-arrow" aria-hidden="true">↗</span>
          </a>
          <a
            className="mc-link"
            href="https://www.linkedin.com/in/juan-miguel-caparas-183210243/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN{" "}
            <span className="mc-arrow" aria-hidden="true">↗</span>
          </a>
          <a
          className="mc-link mc-resume-link"
          href={`${process.env.PUBLIC_URL}/Resume - Caparas.pdf`}
          download="Resume - Caparas.pdf"
        >
          DOWNLOAD RESUME{" "}
          <span className="mc-arrow" aria-hidden="true">↗</span>
        </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <footer className="mc-footer mc-width">
        <p className="mc-small">Juan Miguel Caparas · Manila, PH</p>
        <p className="mc-small">Systems / People / Progress</p>
      </footer>
    </>
  );
}
export default function App() {
  return (
    <div id="mc-editorial">
      <div className="mc-width">
        <Header />
      </div>
      <main>
        <div className="mc-width">
          <Hero />
          <Achievements />
          <SelectedWork />
        </div>
        <Experience />
        <div className="mc-width">
          <Gastos />
          <Credentials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}