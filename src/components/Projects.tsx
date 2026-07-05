import type { PersonalProject } from "../types";
import Section from "./Section";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project, index }: { project: PersonalProject; index: number }) {
  const ref = useReveal<HTMLAnchorElement>();
  const primaryLink = project.links[0];

  return (
    <a
      className="card reveal"
      ref={ref}
      href={primaryLink?.url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="card__num" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      {project.tag && <span className="card__tag">{project.tag}</span>}
      <h3 className="card__name">{project.name}</h3>
      <p className="card__desc">{project.description}</p>
      {project.techUsed && (
        <div className="chips chips--small">
          {project.techUsed.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      )}
      {primaryLink && (
        <span className="card__link">
          {primaryLink.name} <span aria-hidden="true">↗</span>
        </span>
      )}
    </a>
  );
}

export default function Projects({ items }: { items: PersonalProject[] }) {
  return (
    <Section id="projects" index="03" label="Selected Projects">
      <div className="cards">
        {items.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
