import type { About as AboutData, Education } from "../types";
import Section from "./Section";
import { useReveal } from "../hooks/useReveal";

interface AboutProps {
  about: AboutData;
  education: Education[];
  location: { city: string; state: string; country: string };
}

/** Renders the statement with its last word in the accent color. */
function Statement({ text }: { text: string }) {
  const clean = text.replace(/\.$/, "");
  const lastSpace = clean.lastIndexOf(" ");
  const head = clean.slice(0, lastSpace + 1);
  const tail = clean.slice(lastSpace + 1);
  return (
    <>
      {head}
      <em className="accent">{tail}</em>.
    </>
  );
}

export default function About({ about, education, location }: AboutProps) {
  const statementRef = useReveal<HTMLParagraphElement>();
  const bodyRef = useReveal<HTMLParagraphElement>();
  const factsRef = useReveal<HTMLDivElement>();
  const edu = education[0];

  return (
    <Section id="about" index="01" label="About">
      <div className="about">
        <p className="about__statement reveal" ref={statementRef}>
          <Statement text={about.statement} />
        </p>
        <p className="about__body reveal" ref={bodyRef}>
          {about.body}
        </p>
        <div className="about__facts reveal" ref={factsRef}>
          <div className="about__fact">
            <span className="about__fact-label">Focus</span>
            <span className="about__fact-value">{about.focus}</span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Education</span>
            <span className="about__fact-value">
              {edu.degree.replace("in Computer Science & Engineering", "CSE")},{" "}
              {edu.institute}
              <br />
              <span className="about__fact-muted">{edu.duration}</span>
            </span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Based in</span>
            <span className="about__fact-value">
              {location.city}, {location.country}
            </span>
          </div>
          <div className="about__fact">
            <span className="about__fact-label">Experience</span>
            <span className="about__fact-value">{about.experienceSummary}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
