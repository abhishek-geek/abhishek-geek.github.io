import React from "react";
import data from "../../data/me.json";
import "./Education.css";

const Education = () => {
  const education = data.education;
  return (
    <section id="education" className="education">
      <h1>Education</h1>
      <div className="education-content">
        {education.map(
          (edu: {
            id: number;
            institute: string;
            duration: string;
            degree: string;
            courses: string[];
          }) => (
            <EducationItem key={edu.id} education={edu} />
          )
        )}
      </div>
    </section>
  );
};

export default Education;

const EducationItem = ({
  education,
}: {
  education: {
    id: number;
    institute: string;
    duration: string;
    degree: string;
    courses: string[];
  };
}) => {
  return (
    <div className="education-item">
      <p className="duration">{education.duration}</p>
      <h3 className="degree">{education.degree}</h3>
      <h5 className="institute">{education.institute}</h5>
      <h4>Cources: </h4>
      <ul className="cources">
        {education.courses.map((cource: string, index: number) => (
          <li className="cource" key={index}>
            {cource}
          </li>
        ))}
      </ul>
    </div>
  );
};
