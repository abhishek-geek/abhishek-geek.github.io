import type { Education } from "../types";
import Section from "./Section";

interface EducationProps {
  items: Education[];
}

export default function EducationSection({ items }: EducationProps) {
  return (
    <Section id="education" index="04" title="Education">
      {items.map((entry) => (
        <article key={entry.id} className="education">
          <div className="education__main">
            <h3 className="education__institute">{entry.institute}</h3>
            <p className="education__degree">{entry.degree}</p>
          </div>
          <div className="education__aside">
            <span className="education__duration">{entry.duration}</span>
            <ul className="chips">
              {entry.courses.map((course) => (
                <li key={course} className="chip">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </Section>
  );
}
