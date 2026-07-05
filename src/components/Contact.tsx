import type { PersonalDetails } from "../types";
import Section from "./Section";
import SocialLinks from "./SocialLinks";
import { useReveal } from "../hooks/useReveal";

export default function Contact({ details }: { details: PersonalDetails }) {
  const headingRef = useReveal<HTMLHeadingElement>();
  const linksRef = useReveal<HTMLDivElement>();
  const { email, phone } = details;
  const tel = `${phone.prefixCode}${phone.number}`;

  return (
    <Section id="contact" index="05" label="Contact">
      <h2 className="contact__heading reveal" ref={headingRef}>
        Let&rsquo;s build
        <br />
        something<em className="accent">.</em>
      </h2>
      <div className="contact__row reveal" ref={linksRef}>
        <a className="contact__email text-link" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="contact__phone text-link" href={`tel:${tel}`}>
          {phone.prefixCode} {phone.number}
        </a>
      </div>
      <SocialLinks details={details} withArrows className="contact__social" />
    </Section>
  );
}
