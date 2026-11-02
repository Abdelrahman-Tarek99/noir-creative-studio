import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { PageTransition } from "@/components/page-transition";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return {
    title: p?.title ?? "Project",
    description: p?.description,
    openGraph: {
      title: `${p?.title} — NOIR Case Study`,
      description: p?.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((x) => x.slug === slug);
  const p = projects[currentIndex];
  if (!p) notFound();

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
    <article className="case-study wrap">
      {/* ── Header ── */}
      <div className="case-header">
        <p className="section-label">Selected work / {p.index}</p>
        <h1>
          {p.title}
          <span className="headline-period">.</span>
        </h1>
      </div>

      {/* ── Hero art block ── */}
      <div className="case-hero" style={{ background: `linear-gradient(160deg, ${p.accent} 0%, ${p.accentDark} 100%)` }}>
        <span>{p.tag}</span>
        <strong>{p.title}</strong>
      </div>

      {/* ── Project details grid ── */}
      <Reveal>
        <div className="case-details">
          <div className="case-detail">
            <span className="case-detail-label">Category</span>
            <span>{p.category}</span>
          </div>
          <div className="case-detail">
            <span className="case-detail-label">Role</span>
            <span>{p.role}</span>
          </div>
          <div className="case-detail">
            <span className="case-detail-label">Timeline</span>
            <span>{p.timeline}</span>
          </div>
          <div className="case-detail">
            <span className="case-detail-label">Year</span>
            <span>{p.year}</span>
          </div>
        </div>
      </Reveal>

      {/* ── Overview ── */}
      <Reveal>
        <div className="case-section">
          <div className="case-section-label">Overview</div>
          <div className="case-section-body">
            <p className="case-lead">{p.overview}</p>
          </div>
        </div>
      </Reveal>

      {/* ── Challenge ── */}
      <Reveal>
        <div className="case-section">
          <div className="case-section-label">The challenge</div>
          <div className="case-section-body">
            <p>{p.challenge}</p>
          </div>
        </div>
      </Reveal>

      {/* ── Process ── */}
      <Reveal>
        <div className="case-section">
          <div className="case-section-label">Process</div>
          <div className="case-section-body">
            <ol className="case-process">
              {p.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>

      {/* ── Visual break ── */}
      <Reveal>
        <div className="case-visual-break" style={{ background: `linear-gradient(135deg, ${p.accentDark} 0%, ${p.accent} 100%)` }}>
          <div className="case-visual-inner">
            <span className="case-visual-tag">{p.tag} / Visual direction</span>
            <strong>{p.title.split(" ")[0]}</strong>
          </div>
        </div>
      </Reveal>

      {/* ── Solution ── */}
      <Reveal>
        <div className="case-section">
          <div className="case-section-label">The solution</div>
          <div className="case-section-body">
            <p>{p.solution}</p>
          </div>
        </div>
      </Reveal>

      {/* ── Result ── */}
      <Reveal>
        <div className="case-section">
          <div className="case-section-label">Result</div>
          <div className="case-section-body">
            <p>{p.result}</p>
          </div>
        </div>
      </Reveal>

      {/* ── Disclaimer ── */}
      <Reveal>
        <div className="case-disclaimer">
          <p>{p.disclaimer}</p>
        </div>
      </Reveal>

      {/* ── Navigation ── */}
      <div className="case-nav">
        <Link className="text-link" href="/#work">
          ← All projects
        </Link>
        <Magnetic strength={0.2}>
          <Link className="text-link" href={`/work/${nextProject.slug}`}>
            Next: {nextProject.title} →
          </Link>
        </Magnetic>
      </div>
    </article>
    </PageTransition>
  );
}
