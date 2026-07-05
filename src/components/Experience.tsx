import type { WorkExperience } from "../types";
import Section from "./Section";
import { useReveal } from "../hooks/useReveal";

function WorkRow({ job }: { job: WorkExperience }) {
  const ref = useReveal<HTMLLIElement>();

  return (
    <li className="workrow reveal" ref={ref}>
      <span className="workrow__period">{job.duration}</span>
      <div className="workrow__body">
        <div className="workrow__heading">
          <h3 className="workrow__title">{job.jobTitle}</h3>
          <span className="workrow__dot" aria-hidden="true">
            ·
          </span>
          {job.companyWebsite ? (
            <a
              className="workrow__company"
              href={job.companyWebsite}
              target="_blank"
              rel="noreferrer noopener"
            >
              {job.company}
              <span className="workrow__arrow" aria-hidden="true">
                {" "}
                ↗
              </span>
            </a>
          ) : (
            <span className="workrow__company">{job.company}</span>
          )}
        </div>
        <ul className="workrow__points">
          {job.description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="chips">
          {job.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function Experience({ items }: { items: WorkExperience[] }) {
  return (
    <Section id="work" index="02" label="Experience">
      <ol className="worklist">
        {items.map((job) => (
          <WorkRow key={job.id} job={job} />
        ))}
      </ol>
    </Section>
  );
}
