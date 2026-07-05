import profileData from "./data/me.json";
import type { Profile } from "./types";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

const profile = profileData as Profile;

export default function App() {
  return (
    <>
      <Nav details={profile.personalDetails} />
      <main>
        <Hero details={profile.personalDetails} />
        <Experience items={profile.workExperiences} />
        <Projects items={profile.personalProjects} />
        <Skills categories={profile.skills} />
        <EducationSection items={profile.education} />
      </main>
      <Footer details={profile.personalDetails} />
    </>
  );
}
