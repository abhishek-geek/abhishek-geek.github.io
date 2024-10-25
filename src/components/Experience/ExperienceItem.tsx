import React, { useState } from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({
  experience,
}: {
  experience: {
    id: number;
    jobTitle: string;
    company: string;
    companyWebsite?: string;
    duration: string;
    description: string[];
    skills: string[];
  };
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="experience-item">
      <p className="duration">{experience.duration}</p>
      <h3 className="job-title">{experience.jobTitle}</h3>
      <h4 className="company-name">
        <a
          href={experience.companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {experience.company}
        </a>
      </h4>
      <ul className="description">
        <li className="description-line">{experience.description[0]}</li>
        {showMore &&
          experience.description.slice(1).map((desc: string, index: number) => (
            <li className="description-line" key={index}>
              {desc}
            </li>
          ))}
      </ul>
      {!showMore && experience.description.length > 1 ? (
        <button className="see-more" onClick={() => setShowMore(true)}>
          See More
        </button>
      ) : null}
      {showMore && (
        <button className="see-more" onClick={() => setShowMore(false)}>
          Show Less
        </button>
      )}
      {/* <div className="skills">
        {experience.skills.map((skill: string, index: number) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default ExperienceItem;
