import type { Trophy } from "../content";

interface TrophyRoomProps {
  trophies: Trophy[];
}

export default function TrophyRoom({ trophies }: TrophyRoomProps) {
  return (
    <section id="trophies" className="arcade__section">
      <div className="arcade__head" data-reveal>
        <span className="arcade__head-num">03</span>
        <h2 className="arcade__head-title">Trophy Room</h2>
        <span className="arcade__head-rule" />
        <span className="arcade__head-meta">{trophies.length} UNLOCKED</span>
      </div>
      <div className="arcade__grid-trophies">
        {trophies.map((trophy) => (
          <div
            key={trophy.title}
            className="arcade__trophy"
            data-reveal
            style={{ borderColor: trophy.color }}
          >
            <div
              className="arcade__trophy-glow"
              aria-hidden="true"
              style={{ background: `radial-gradient(circle, ${trophy.glow} 0%, transparent 70%)` }}
            />
            <div className="arcade__trophy-top">
              <span className="arcade__trophy-icon">{trophy.icon}</span>
              <span
                className="arcade__rarity"
                style={{ color: trophy.color, borderColor: trophy.color }}
              >
                {trophy.rarity}
              </span>
            </div>
            <h3 className="arcade__trophy-title">{trophy.title}</h3>
            <p className="arcade__trophy-desc">{trophy.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
