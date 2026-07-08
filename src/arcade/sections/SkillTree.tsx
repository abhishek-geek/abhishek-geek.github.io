import type { SkillTreeCategory } from "../content";

interface SkillTreeProps {
  categories: SkillTreeCategory[];
}

export default function SkillTree({ categories }: SkillTreeProps) {
  return (
    <section id="skills" className="arcade__section">
      <div className="arcade__head" data-reveal>
        <span className="arcade__head-num">04</span>
        <h2 className="arcade__head-title">Skill Tree</h2>
        <span className="arcade__head-rule" />
        <span className="arcade__head-meta">ABILITIES UNLOCKED</span>
      </div>
      <div className="arcade__skills">
        {categories.map((cat) => (
          <div data-reveal key={cat.category}>
            <div className="arcade__skill-cat-head">
              <span className="arcade__skill-cat-num">{cat.num}</span>
              <span className="arcade__skill-cat-name">{cat.category}</span>
              <span className="arcade__skill-cat-rule" />
            </div>
            <div className="arcade__abilities">
              {cat.items.map((item) => (
                <div className="arcade__ability" key={item.name}>
                  <span className="arcade__ability-slot">
                    {item.iconUrl ? (
                      <span
                        className="arcade__ability-icon"
                        aria-hidden="true"
                        style={{
                          maskImage: `url(${item.iconUrl})`,
                          WebkitMaskImage: `url(${item.iconUrl})`,
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                        }}
                      />
                    ) : (
                      <span className="arcade__ability-mono">{item.mono}</span>
                    )}
                  </span>
                  <span className="arcade__ability-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
