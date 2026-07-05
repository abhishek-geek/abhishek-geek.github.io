import type { PersonalDetails } from "../types";

interface SocialLinksProps {
  details: PersonalDetails;
  className?: string;
}

const icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  ),
  leetcode: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.1 3.4 9.06 10.43a4.55 4.55 0 0 0 0 6.44l4.19 4.19a1.16 1.16 0 0 1-1.64 1.63l-4.19-4.18a6.86 6.86 0 0 1 0-9.71l7.05-7.04A1.16 1.16 0 0 1 16.1 3.4ZM12.6 9.35a1.16 1.16 0 0 1 1.63 0l5.28 5.27a1.16 1.16 0 1 1-1.64 1.64l-5.27-5.28a1.16 1.16 0 0 1 0-1.63Zm-2.68 4.4h9.93a1.16 1.16 0 1 1 0 2.31H9.92a1.16 1.16 0 1 1 0-2.32Z" />
    </svg>
  ),
} as const;

export default function SocialLinks({ details, className }: SocialLinksProps) {
  const links = [
    { label: "GitHub", href: details.github, icon: icons.github },
    { label: "LinkedIn", href: details.linkedin, icon: icons.linkedin },
    { label: "X (Twitter)", href: details.x, icon: icons.x },
    { label: "LeetCode", href: details.leetcode, icon: icons.leetcode },
  ];

  return (
    <ul className={`social ${className ?? ""}`.trim()}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
