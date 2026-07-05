import type { PersonalDetails } from "../types";

export default function Footer({ details }: { details: PersonalDetails }) {
  const { name, role, currentLocation } = details;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>
        {name.first} {name.last} — {role}
      </span>
      <span>
        {currentLocation.city}, IN · © {year}
      </span>
      <span>Designed &amp; rebuilt {year}</span>
    </footer>
  );
}
