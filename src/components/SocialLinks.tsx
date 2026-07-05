import type { PersonalDetails } from "../types";

interface SocialLinksProps {
  details: PersonalDetails;
  withArrows?: boolean;
  className?: string;
}

export default function SocialLinks({
  details,
  withArrows = false,
  className,
}: SocialLinksProps) {
  const links = [
    { label: "GitHub", href: details.github },
    { label: "LinkedIn", href: details.linkedin },
    { label: "X / Twitter", href: details.x },
    { label: "LeetCode", href: details.leetcode },
    { label: "Résumé", href: details.resumeLink },
  ];

  return (
    <ul className={`social ${className ?? ""}`.trim()}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            className="text-link"
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.label}
            {withArrows && " ↗"}
          </a>
        </li>
      ))}
    </ul>
  );
}
