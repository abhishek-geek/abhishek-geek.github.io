import type { Quest } from "../content";

interface QuestLogProps {
  quests: Quest[];
}

export default function QuestLog({ quests }: QuestLogProps) {
  return (
    <section id="quests" className="arcade__section arcade__section--quests">
      <div className="arcade__head" data-reveal>
        <span className="arcade__head-num">02</span>
        <h2 className="arcade__head-title">Quest Log</h2>
        <span className="arcade__head-rule" />
        <span className="arcade__head-meta">EXPERIENCE</span>
      </div>

      <div className="arcade__quests">
        {quests.map((quest) => (
          <article
            key={quest.company}
            className="arcade__quest"
            data-reveal
            style={{ borderColor: `color-mix(in srgb, ${quest.color} 45%, transparent)` }}
          >
            <span
              className="arcade__quest-stripe"
              aria-hidden="true"
              style={{ background: quest.color }}
            />
            <div className="arcade__quest-meta">
              <span className="arcade__quest-type" style={{ background: quest.color }}>
                {quest.type}
              </span>
              <span className="arcade__quest-status" style={{ color: quest.color, borderColor: quest.color }}>
                {quest.statusIcon} {quest.status}
              </span>
              <span style={{ flex: 1 }} />
              <span className="arcade__quest-period">{quest.period}</span>
              {quest.xp && <span className="arcade__quest-xp">+{quest.xp} XP</span>}
            </div>

            <div className="arcade__quest-title-row">
              <h3 className="arcade__quest-title">{quest.company}</h3>
              {quest.url && (
                <a className="arcade__visit" href={quest.url} target="_blank" rel="noopener">
                  VISIT ↗
                </a>
              )}
            </div>

            <div className="arcade__roles">
              {quest.roles.map((role) => (
                <div className="arcade__role" key={role.title + role.period}>
                  <div className="arcade__role-head">
                    {role.chapter && <span className="arcade__role-chapter">{role.chapter}</span>}
                    <span className="arcade__role-title">{role.title}</span>
                    <span className="arcade__role-period">· {role.period}</span>
                  </div>
                  <ul className="arcade__bullets">
                    {role.bullets.map((bullet, i) => (
                      <li className="arcade__bullet" key={i}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {quest.loot.length > 0 && (
              <div className="arcade__loot">
                <div className="arcade__loot-label">◈ LOOT ACQUIRED</div>
                <div className="arcade__loot-items">
                  {quest.loot.map((item) => (
                    <span className="arcade__chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
