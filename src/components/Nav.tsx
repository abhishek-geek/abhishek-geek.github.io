import type { PersonalDetails } from "../types";
import ThemeToggle from "./ThemeToggle";

interface NavProps {
  details: PersonalDetails;
}

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ details }: NavProps) {
  const initials = `${details.name.first[0]}${details.name.last[0]}`;

  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="nav__mark">
        {initials}
        <span className="nav__mark-dot">.</span>
      </a>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
