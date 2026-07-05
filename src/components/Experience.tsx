import type { Company, Role } from "../types";
import Section from "./Section";
import { useReveal } from "../hooks/useReveal";

function RoleEntry({ role, showDot }: { role: Role; showDot: boolean }) {
  return (
    <div className="role">
      {showDot && (
        <span
          className={`role__dot ${role.current ? "role__dot--current" : ""}`.trim()}
          aria-hidden="true"
        />
      )}
      <div className="role__period">{role.period}</div>
      <h3 className="role__title">{role.title}</h3>
      <ul className="role__points">
        {role.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="chips">
        {role.skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function CompanyRow({ company }: { company: Company }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className="workco reveal" ref={ref}>
      <div className="workco__aside">
        {company.website ? (
          <a
            className="workco__name text-link"
            href={company.website}
            target="_blank"
            rel="noreferrer noopener"
          >
            {company.company}
            <span className="workco__arrow" aria-hidden="true">
              {" "}
              ↗
            </span>
          </a>
        ) : (
          <span className="workco__name">{company.company}</span>
        )}
        <div className="workco__span">{company.span}</div>
        <div className="workco__tenure">{company.tenure}</div>
      </div>
      <div className="workco__timeline">
        {company.roles.map((role) => (
          <RoleEntry key={role.title + role.period} role={role} showDot />
        ))}
      </div>
    </div>
  );
}

export default function Experience({ items }: { items: Company[] }) {
  return (
    <Section id="work" index="02" label="Experience">
      {items.map((company) => (
        <CompanyRow key={company.id} company={company} />
      ))}
    </Section>
  );
}
