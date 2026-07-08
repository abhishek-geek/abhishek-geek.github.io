import type { ArcadeContent } from "../content";

interface PartyProps {
  content: ArcadeContent;
}

export default function Party({ content }: PartyProps) {
  return (
    <section id="party" className="arcade__section--party">
      <div className="arcade__party" data-reveal>
        <div className="arcade__party-glow" aria-hidden="true" />
        <div className="arcade__party-inner">
          <div className="arcade__party-kicker">◆ PLAYER 2 WANTED ◆</div>
          <h2 className="arcade__party-title">Join the party</h2>
          <p className="arcade__party-copy">
            Got a quest that needs a backend engineer? Drop a line — I'm open to
            conversations.
          </p>
          <div className="arcade__party-cta">
            <a className="arcade__btn arcade__btn--sm" href={`mailto:${content.email}`}>
              ✉ SEND MESSAGE
            </a>
            <a className="arcade__ghost" href={content.phoneHref}>
              📞 {content.phoneLabel}
            </a>
          </div>
          <div className="arcade__socials">
            {content.socials.map((social) => (
              <a
                key={social.label}
                className="arcade__social"
                href={social.url}
                target="_blank"
                rel="noopener"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="arcade__footer">
        <span>
          {content.playerName.first.toUpperCase()} {content.playerName.last.toUpperCase()} ·{" "}
          {content.classLabel}
        </span>
        <span>{content.location} · © 2026</span>
        <span>◆ GAME OVER? INSERT COIN ◆</span>
      </footer>
    </section>
  );
}
