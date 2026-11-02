import Link from "next/link";
import type {Project} from "@/lib/projects";
import {Reveal} from "./reveal";
export function ProjectCard({project}:{project:Project}){return <Reveal><Link className="project-card" href={`/work/${project.slug}`}><div className="project-art" style={{backgroundColor:project.accent}}><div className="art-grid"/><div className="art-label">{project.index} / NOIR</div><strong>{project.title.split(" ")[0]}<br/><i>{project.title.split(" ").slice(1).join(" ")}</i></strong><span className="art-corner">↗</span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}</p></div><span>{project.year} ↗</span></div></Link></Reveal>}
