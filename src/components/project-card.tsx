import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Reveal } from "./reveal";
import { Parallax } from "./parallax";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <Link className="project-card" href={`/work/${project.slug}`}>
        <Parallax className="project-art" speed={0.08}>
          <div
            className="project-art-inner"
            style={{ backgroundColor: project.accent }}
          >
            <div className="art-grid" />
            <div className="art-label">{project.index} / NOIR</div>
            <strong>
              {project.title.split(" ")[0]}
              <br />
              <i>{project.title.split(" ").slice(1).join(" ")}</i>
            </strong>
            <span className="art-corner">↗</span>
          </div>
        </Parallax>
        <div className="project-meta">
          <div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
          <span>{project.year} ↗</span>
        </div>
      </Link>
    </Reveal>
  );
}
