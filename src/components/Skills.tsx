import type { SkillCategory } from "../types";
import Section from "./Section";

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl className="skills">
        {categories.map((group) => (
          <div key={group.id} className="skills__row">
            <dt className="skills__category">{group.category}</dt>
            <dd className="skills__list">
              <ul className="chips">
                {group.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
