import ExperienceItem from "./ExperienceItem";
import data from "../../data/me.json";
import "./Experience.css"; // Create this CSS file for styling

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1>Work Experience</h1>
      <div className="experience-list">
        {data.workExperiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
