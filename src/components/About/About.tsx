import "./About.css";
import data from "../../data/me.json";
import SocialIcon from "../SocialIcon/SocialIcon";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import xIcon from "../../assets/icons/x.svg";
import leetcodeIcon from "../../assets/icons/leetcode.svg";
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

          <button className="resume-button">
            <a
              href={data.personalDetails.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume 📎
            </a>
          </button>

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
            <SocialIcon
              // icon={leetcodeIcon}
              icon="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/916px-LeetCode_Logo_black_with_text.svg.png"
              url={data.personalDetails?.linkedin}
              alt="leetcode"
            />
          </div>

          <div className="contact">
            <h4 className="contact-text">Get in touch</h4>
            📧 Email:{" "}
            <a href={`mailto:${data.personalDetails.email}`}>
              {data.personalDetails.email}
            </a>
            <br />
            ☎️ Phone:{" "}
            <a href={`tel:${data.personalDetails.phone.number}`}>
              {data.personalDetails.phone.prefixCode}{" "}
              {data.personalDetails.phone.number}
            </a>
          </div>
        </div>
        <img src={myImage} alt={`${name}`} className="about-image" />
      </div>
    </section>
  );
};

export default About;
