import type { PersonalDetails } from "../types";
import SocialLinks from "./SocialLinks";

interface HeroProps {
  details: PersonalDetails;
}

const CURRENT_YEAR = new Date().getFullYear();

export default function Hero({ details }: HeroProps) {
  const { name, role, tagline, status, currentLocation, email } = details;

  return (
    <header className="hero">
      <p className="hero__kicker rise rise-1">
        <span>{role}</span>
        <span className="hero__slash" aria-hidden="true">
          /
        </span>
        <span>
          {currentLocation.city}, {currentLocation.country}
        </span>
        <span className="hero__slash" aria-hidden="true">
          /
        </span>
        <span>{CURRENT_YEAR}</span>
      </p>
      <h1 className="hero__name">
        <span className="rise rise-2">{name.first}</span>
        <span className="rise rise-3">
          {name.last}
          <em className="accent">.</em>
        </span>
      </h1>
      <div className="hero__row">
        <p className="hero__tagline rise rise-4">{tagline}</p>
        <p className="hero__status rise rise-5">
          <span className="hero__pulse" aria-hidden="true" />
          {status}
        </p>
      </div>
      <div className="hero__actions rise rise-6">
        <a className="button-primary" href={`mailto:${email}`}>
          Get in touch <span className="button-primary__arrow">↗</span>
        </a>
        <SocialLinks details={details} />
      </div>
    </header>
  );
}
