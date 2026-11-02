import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { HeroReveal } from "@/components/hero-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero wrap">
        <HeroReveal>
          <div className="eyebrow" data-hero-reveal>
            <span>Independent creative practice</span>
            <span>Based everywhere · Working worldwide</span>
          </div>
          <h1 data-hero-reveal>
            Ideas made<br />
            <em>impossible</em>
            <span className="headline-period">.</span>
          </h1>
          <div className="hero-bottom" data-hero-reveal>
            <p>
              We shape distinct identities and digital experiences for those who
              see the world differently.
            </p>
            <Link className="round-arrow" aria-label="Explore selected work" href="#work">
              ↓
            </Link>
          </div>
        </HeroReveal>
      </section>

      {/* ── Selected work ── */}
      <section className="work wrap" id="work">
        <div className="section-heading">
          <span>01 / Selected work</span>
          <p>
            A few things we imagined.<br />
            A little differently.
          </p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className="manifesto wrap">
        <Reveal>
          <p className="section-label">02 / Our thinking</p>
          <h2>
            Good design is<br />
            a feeling <em>before</em>
            <br />
            it&apos;s a feature.
          </h2>
          <div className="manifesto-bottom">
            <p>
              Strategy, art direction, and technology — thoughtfully composed
              into experiences that feel both inevitable and unexpected.
            </p>
            <Link className="text-link" href="/about">
              Get to know the studio ↗
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Services ── */}
      <section className="services wrap">
        <div className="section-heading">
          <span>03 / What we do</span>
          <p>
            Small studio.<br />
            Wide perspective.
          </p>
        </div>
        {[
          "Art direction & identity",
          "Digital experiences",
          "Campaigns & content",
          "Creative development",
        ].map((service, i) => (
          <Reveal key={service}>
            <div className="service-line">
              <span>0{i + 1}</span>
              <h3>{service}</h3>
              <span>↗</span>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── Contact CTA ── */}
      <section className="cta wrap">
        <Reveal>
          <p className="cta-label">04 / Start a project</p>
          <h2>
            Ready to make<br />
            something <em>remarkable</em>?
          </h2>
          <Link className="cta-btn" href="/contact">
            Get in touch <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
