import type { SkillCategory } from "../types";
import Section from "./Section";
import { useReveal } from "../hooks/useReveal";

function SkillRow({ group }: { group: SkillCategory }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className="skillrow reveal" ref={ref}>
      <span className="skillrow__category">{group.category}</span>
      <div className="skillrow__chips">
        {group.skills.map((skill) => (
          <span key={skill} className="chip chip--body">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <Section id="skills" index="04" label="Toolkit">
      {categories.map((group) => (
        <SkillRow key={group.id} group={group} />
      ))}
    </Section>
  );
}
