import type { PersonalDetails } from "../types";
import SocialLinks from "./SocialLinks";
import { useReveal } from "../hooks/useReveal";

interface FooterProps {
  details: PersonalDetails;
}

export default function Footer({ details }: FooterProps) {
  const ref = useReveal<HTMLElement>();
  const { name, email, phone, currentLocation } = details;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer reveal" ref={ref}>
      <p className="footer__kicker">Have an idea, role, or problem worth solving?</p>
      <a className="footer__email" href={`mailto:${email}`}>
        Let’s talk<em>.</em>
      </a>
      <div className="footer__meta">
        <span>{email}</span>
        <span aria-hidden="true">·</span>
        <span>
          {phone.prefixCode} {phone.number}
        </span>
        <span aria-hidden="true">·</span>
        <span>
          {currentLocation.city}, {currentLocation.state}, {currentLocation.country}
        </span>
      </div>
      <SocialLinks details={details} className="footer__social" />
      <p className="footer__copy">
        © {year} {name.first} {name.last}. Designed & built with care.
      </p>
    </footer>
  );
}
