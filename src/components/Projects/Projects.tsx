import data from "../../data/me.json";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {data.personalProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectItem = ({
  project,
}: {
  project: {
    id: number;
    name: string;
    description: string;
    links: {
      name: string;
      url: string;
    }[];
    techUsed?: string[];
  };
}) => {
  return (
    <div className="project-item">
      <h3 className="project-name">{project.name}</h3>
      <p className="description-line">{project.description}</p>
      <div className="links">
        {project.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
