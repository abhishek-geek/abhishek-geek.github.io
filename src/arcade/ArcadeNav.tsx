interface ArcadeNavProps {
  handle: string;
}

const NAV_LINKS = [
  { href: "#character", num: "01", label: "CHARACTER" },
  { href: "#quests", num: "02", label: "QUESTS" },
  { href: "#trophies", num: "03", label: "TROPHIES" },
  { href: "#skills", num: "04", label: "SKILLS" },
  { href: "#party", num: "05", label: "PARTY" },
];

export default function ArcadeNav({ handle }: ArcadeNavProps) {
  return (
    <nav className="arcade__nav" aria-label="Primary">
      <a href="#top" className="arcade__brand">
        <span className="arcade__dot" aria-hidden="true" />
        <span className="arcade__player">PLAYER&nbsp;1</span>
        <span className="arcade__handle">{handle}</span>
      </a>
      <div className="arcade__menu">
        {NAV_LINKS.map((link) => (
          <a key={link.href} className="arcade__menu-link" href={link.href}>
            <span>{link.num}</span> {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
