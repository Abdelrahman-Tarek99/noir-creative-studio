import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "NOIR is a fictional independent creative studio exploring identity, editorial design, and digital craft.",
};

export default function About() {
  return (
    <section className="simple-page wrap">
      <p className="section-label">About / The studio</p>
      <h1>
        Quietly bold.<br />
        <em>Intentionally</em> different.
      </h1>

      {/* ── Intro ── */}
      <Reveal>
        <div className="about-intro">
          <p className="about-intro-lead">
            NOIR is a fictional independent creative studio, imagined as a
            demonstration of editorial design thinking and modern frontend
            development.
          </p>
          <div className="about-intro-body">
            <p>
              We work at the intersection of branding, digital craft, and visual
              storytelling. Every project begins with a question: what does this
              need to feel like? From there, strategy, art direction, and
              technology are composed into experiences that earn attention rather
              than demand it.
            </p>
            <p>
              The visual identities and case studies featured on this site are
              concept work — fictional projects designed to demonstrate
              methodology, not client engagements. No real companies,
              testimonials, or performance metrics are represented.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Approach ── */}
      <Reveal>
        <div className="about-section">
          <div className="section-heading">
            <span>Our approach</span>
            <p>
              Three principles that<br />
              shape everything.
            </p>
          </div>
          <div className="about-values">
            <div className="about-value">
              <h3>Restraint over decoration</h3>
              <p>
                Every element earns its place. We remove until what remains is
                essential — then refine until it feels effortless.
              </p>
            </div>
            <div className="about-value">
              <h3>Feeling before feature</h3>
              <p>
                Design that connects starts with emotional clarity. We define how
                something should feel before deciding what it should do.
              </p>
            </div>
            <div className="about-value">
              <h3>Craft at every scale</h3>
              <p>
                From typographic details to system architecture, the quality of
                thinking should be consistent whether the audience notices or
                not.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Services ── */}
      <Reveal>
        <div className="about-section">
          <div className="section-heading">
            <span>Capabilities</span>
            <p>
              What we bring<br />
              to the work.
            </p>
          </div>
          <div className="about-services-grid">
            {[
              { num: "01", name: "Brand strategy & identity" },
              { num: "02", name: "Art direction" },
              { num: "03", name: "Editorial & content design" },
              { num: "04", name: "Digital experience design" },
              { num: "05", name: "Creative development" },
              { num: "06", name: "Campaign direction" },
            ].map((s) => (
              <div key={s.num} className="about-service-item">
                <span className="about-service-num">{s.num}</span>
                <h3>{s.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── CTA ── */}
      <Reveal>
        <div className="about-section" style={{ borderBottom: "none", textAlign: "center", padding: "100px 0 50px" }}>
          <p className="section-label">Interested?</p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 500,
            letterSpacing: "-.07em",
            lineHeight: .95,
            margin: "30px 0 40px",
          }}>
            Let&apos;s talk about<br />
            your <em>next</em> project.
          </h2>
          <Link className="cta-btn" href="/contact">
            Get in touch <span aria-hidden>↗</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
