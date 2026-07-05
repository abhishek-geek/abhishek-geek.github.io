import type { WorkExperience } from "../types";
import Section from "./Section";

interface ExperienceProps {
  items: WorkExperience[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="timeline">
        {items.map((job) => (
          <li key={job.id} className="timeline__item">
            <div className="timeline__meta">
              <span className="timeline__duration">{job.duration}</span>
            </div>
            <div className="timeline__body">
              <h3 className="timeline__role">{job.jobTitle}</h3>
              <p className="timeline__company">
                {job.companyWebsite ? (
                  <a href={job.companyWebsite} target="_blank" rel="noreferrer noopener">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </p>
              <ul className="timeline__points">
                {job.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="chips">
                {job.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
