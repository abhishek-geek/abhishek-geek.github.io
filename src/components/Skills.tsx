import type { SkillCategory, SkillItem } from "../types";
import Section from "./Section";
import { useReveal } from "../hooks/useReveal";

const ICON_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/";

function TechTile({ item }: { item: SkillItem }) {
  return (
    <div className="tech">
      <span className="tech__slot">
        {item.icon ? (
          <span
            className="tech__icon"
            style={{
              WebkitMask: `url(${ICON_BASE}${item.icon}.svg) center/contain no-repeat`,
              mask: `url(${ICON_BASE}${item.icon}.svg) center/contain no-repeat`,
            }}
            aria-hidden="true"
          />
        ) : (
          <span className="tech__mono" aria-hidden="true">
            {item.mono}
          </span>
        )}
      </span>
      <span className="tech__name">{item.name}</span>
    </div>
  );
}

function ToolkitRow({ group, index }: { group: SkillCategory; index: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className="toolkit reveal" ref={ref}>
      <div className="toolkit__label">
        <span className="toolkit__num">{String(index + 1).padStart(2, "0")}</span>
        <span className="toolkit__category">{group.category}</span>
      </div>
      <div className="toolkit__grid">
        {group.skills.map((item) => (
          <TechTile key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <Section id="skills" index="04" label="Toolkit">
      {categories.map((group, i) => (
        <ToolkitRow key={group.id} group={group} index={i} />
      ))}
    </Section>
  );
}
