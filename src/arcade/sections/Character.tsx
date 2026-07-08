import type { ArcadeContent } from "../content";

interface CharacterProps {
  content: ArcadeContent;
}

/** Decorative RPG framing — not part of the resume data. */
const LEVEL = 12;
const XP_PCT = 88;
const XP_LABEL = "14,200 / 16,000 XP";

export default function Character({ content }: CharacterProps) {
  const initials = `${content.playerName.first[0]}${content.playerName.last[0]}`;

  return (
    <header id="character" className="arcade__hero">
      <div className="arcade__hero-grid">
        {/* identity panel */}
        <div className="arcade__panel">
          <span className="arcade__corner arcade__corner--tl" aria-hidden="true" />
          <span className="arcade__corner arcade__corner--tr" aria-hidden="true" />
          <span className="arcade__corner arcade__corner--bl" aria-hidden="true" />
          <span className="arcade__corner arcade__corner--br" aria-hidden="true" />

          <div className="arcade__id">
            <div className="arcade__avatar" aria-hidden="true">
              <div className="arcade__avatar-inner">
                <span>{initials.toUpperCase()}</span>
              </div>
            </div>
            <div style={{ minWidth: 200 }}>
              <div className="arcade__now">NOW PLAYING</div>
              <h1 className="arcade__name">
                {content.playerName.first}
                <br />
                {content.playerName.last}
              </h1>
              <div className="arcade__tags">
                <span className="arcade__tag arcade__tag--acc">CLASS · {content.classLabel}</span>
                <span className="arcade__tag arcade__tag--muted">📍 {content.location}</span>
              </div>
            </div>
          </div>

          <div className="arcade__level">
            <div className="arcade__level-badge">
              <small>LVL</small>
              <b>{LEVEL}</b>
            </div>
            <div className="arcade__level-body">
              <div className="arcade__xp-row">
                <span>EXPERIENCE</span>
                <span>{XP_LABEL}</span>
              </div>
              <div className="arcade__bar arcade__bar--lg">
                <div className="arcade__bar-fill" data-fill={XP_PCT} />
              </div>
              <div className="arcade__level-note">
                {content.experienceSummary.toUpperCase()} ·{" "}
                {content.currentCompany
                  ? `SDE II @ ${content.currentCompany.toUpperCase()}`
                  : content.classLabel}
              </div>
            </div>
          </div>

          <p className="arcade__summary">{content.summary}</p>

          <div className="arcade__cta">
            <a className="arcade__btn" href={`mailto:${content.email}`}>
              ▶ PRESS START
            </a>
            <a
              className="arcade__ghost"
              href={content.resumeUrl}
              target="_blank"
              rel="noopener"
            >
              ⭳ LOAD RÉSUMÉ
            </a>
          </div>
        </div>

        {/* stat block */}
        <div className="arcade__stats">
          <div className="arcade__stats-head">
            <b>STATS</b>
            <span>BASE ATTRIBUTES</span>
          </div>
          {content.stats.map((stat) => (
            <div className="arcade__stat" key={stat.label}>
              <div className="arcade__stat-row">
                <span className="label">{stat.label}</span>
                <span className="pct">{stat.pct}</span>
              </div>
              <div className="arcade__bar arcade__bar--sm">
                <div className="arcade__bar-fill" data-fill={stat.pct} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
