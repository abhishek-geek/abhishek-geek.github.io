import type { PersonalProject } from "../types";
import Section from "./Section";

interface ProjectsProps {
  items: PersonalProject[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <Section id="projects" index="02" title="Projects">
      <div className="projects">
        {items.map((project, i) => (
          <article key={project.id} className="project">
            <span className="project__number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="project__name">{project.name}</h3>
            <p className="project__desc">{project.description}</p>
            {project.techUsed && (
              <ul className="chips">
                {project.techUsed.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            <div className="project__links">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.name} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
