import type { ReactNode } from "react";
import type { SideQuest } from "../content";

interface SideQuestsProps {
  sideQuests: SideQuest[];
}

function CardBody({ quest }: { quest: SideQuest }): ReactNode {
  return (
    <>
      <span className="arcade__side-num" aria-hidden="true">
        {quest.num}
      </span>
      <div className="arcade__side-top">
        <span className="arcade__side-icon">{quest.icon}</span>
        <span
          className="arcade__rarity"
          style={{ color: quest.color, borderColor: quest.color }}
        >
          {quest.rarity}
        </span>
      </div>
      <h3 className="arcade__side-title">{quest.name}</h3>
      <p className="arcade__side-desc">{quest.description}</p>
      <div className="arcade__side-tech">
        {quest.tech.map((tech) => (
          <span className="arcade__side-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      {quest.url && <div className="arcade__side-link">{quest.linkLabel} ↗</div>}
    </>
  );
}

export default function SideQuests({ sideQuests }: SideQuestsProps) {
  return (
    <section id="sidequests" className="arcade__section">
      <div className="arcade__head" data-reveal>
        <span className="arcade__head-num">05</span>
        <h2 className="arcade__head-title">Side Quests</h2>
        <span className="arcade__head-rule" />
        <span className="arcade__head-meta">PROJECTS</span>
      </div>
      <div className="arcade__grid-side">
        {sideQuests.map((quest) =>
          quest.url ? (
            <a
              key={quest.name}
              className="arcade__side"
              data-reveal
              href={quest.url}
              target="_blank"
              rel="noopener"
              style={{ borderColor: quest.color }}
            >
              <CardBody quest={quest} />
            </a>
          ) : (
            <div
              key={quest.name}
              className="arcade__side"
              data-reveal
              style={{ borderColor: quest.color }}
            >
              <CardBody quest={quest} />
            </div>
          )
        )}
      </div>
    </section>
  );
}
