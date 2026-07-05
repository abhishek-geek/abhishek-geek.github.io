import type { PersonalDetails } from "../types";
import SocialLinks from "./SocialLinks";
import portrait from "../assets/images/me.jpg";

interface HeroProps {
  details: PersonalDetails;
}

export default function Hero({ details }: HeroProps) {
  const { name, role, description, currentLocation, email } = details;

  return (
    <header id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__kicker">
            {currentLocation.city}, {currentLocation.country} — {role}
          </p>
          <h1 className="hero__name">
            {name.first}
            <br />
            <em>{name.last}</em>
          </h1>
          <p className="hero__desc">{description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={`mailto:${email}`}>
              Get in touch
            </a>
            <a className="button" href="#experience">
              See my work
            </a>
          </div>
          <SocialLinks details={details} className="hero__social" />
        </div>
        <figure className="hero__portrait">
          <img src={portrait} alt={`Portrait of ${name.first} ${name.last}`} />
        </figure>
      </div>
      <a className="hero__scroll" href="#experience" aria-hidden="true" tabIndex={-1}>
        scroll
      </a>
    </header>
  );
}
