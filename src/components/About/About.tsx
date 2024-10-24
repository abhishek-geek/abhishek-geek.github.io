import "./About.css";
import data from "../../data/me.json";
import SocialIcon from "../SocialIcon/SocialIcon";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import xIcon from "../../assets/icons/x.svg";
import myImage from "../../assets/images/me.jpg"; // Update with your image path

const About = () => {
  const name = `${data.personalDetails.name.first} ${data.personalDetails.name.last}`;
  const role = data.personalDetails.role;
  const description = data.personalDetails.description;

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h1 className="highlighted">
            Hello! I'm {name}, a passionate {role}.
          </h1>
          <p className="description">{description}</p>

          <div className="links">
            <SocialIcon
              icon={linkedinIcon}
              url={data.personalDetails.linkedin}
              alt="LinkedIn"
            />
            <SocialIcon
              icon={githubIcon}
              url={data.personalDetails?.github}
              alt="GitHub"
            />
            <SocialIcon icon={xIcon} url={data.personalDetails?.x} alt="X" />
          </div>
        </div>
        <img src={myImage} alt={`${name}`} className="about-image" />
      </div>
    </section>
  );
};

export default About;
