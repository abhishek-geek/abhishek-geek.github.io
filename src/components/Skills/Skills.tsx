import "./Skills.css";
import data from "../../data/me.json";

const Skills = () => {
  const skills = data.skills;
  return (
    <section id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skills-content">
        {skills.map(
          (category: { id: number; category: string; skills: string[] }) => (
            <Category key={category.id} category={category} />
          )
        )}
      </div>
    </section>
  );
};

const Category = ({
  category,
}: {
  category: {
    id: number;
    category: string;
    skills: string[];
  };
}) => {
  return (
    <div key={category.id} className="skills-category">
      <h2>{category.category}</h2>
      <ul>
        {category.skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
