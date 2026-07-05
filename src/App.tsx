import profileData from "./data/me.json";
import type { Profile } from "./types";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const profile = profileData as Profile;

export default function App() {
  return (
    <>
      <Nav details={profile.personalDetails} />
      <main id="top" className="page">
        <Hero details={profile.personalDetails} />
        <Marquee items={profile.marquee} />
        <About
          about={profile.about}
          education={profile.education}
          location={profile.personalDetails.currentLocation}
        />
        <Experience items={profile.companies} />
        <Projects items={profile.personalProjects} />
        <Skills categories={profile.skills} />
        <Contact details={profile.personalDetails} />
        <Footer details={profile.personalDetails} />
      </main>
    </>
  );
}
