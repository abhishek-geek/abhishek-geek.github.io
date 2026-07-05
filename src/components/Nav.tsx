import type { PersonalDetails } from "../types";
import ThemeToggle from "./ThemeToggle";

interface NavProps {
  details: PersonalDetails;
}

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ details }: NavProps) {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="nav__mark">
        <span className="nav__name">
          {details.name.first} {details.name.last}
        </span>
        <span className="nav__role">SDE</span>
      </a>
      <div className="nav__right">
        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
