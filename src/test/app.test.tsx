import { render, screen } from "@testing-library/react";
import App from "../App";
import profileData from "../data/me.json";
import type { Profile } from "../types";

const profile = profileData as Profile;

describe("me.json data contract", () => {
  it("has the personal details the site renders", () => {
    const d = profile.personalDetails;
    expect(d.name.first).toBeTruthy();
    expect(d.name.last).toBeTruthy();
    expect(d.role).toBeTruthy();
    expect(d.email).toMatch(/@/);
    expect(d.github).toMatch(/^https:\/\//);
    expect(d.linkedin).toMatch(/^https:\/\//);
    expect(d.resumeLink).toMatch(/^https:\/\//);
  });

  it("has non-empty collections", () => {
    expect(profile.workExperiences.length).toBeGreaterThan(0);
    expect(profile.personalProjects.length).toBeGreaterThan(0);
    expect(profile.skills.length).toBeGreaterThan(0);
    expect(profile.education.length).toBeGreaterThan(0);
  });
});

describe("App", () => {
  it("renders every section with data from me.json", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /abhishek/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();

    for (const job of profile.workExperiences) {
      expect(screen.getByText(job.jobTitle)).toBeInTheDocument();
    }
    for (const project of profile.personalProjects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
    expect(screen.getByText(profile.education[0].institute)).toBeInTheDocument();
  });

  it("links contact actions to the email in me.json", () => {
    render(<App />);
    const mailLinks = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("href")?.startsWith("mailto:"));
    expect(mailLinks.length).toBeGreaterThan(0);
    for (const link of mailLinks) {
      expect(link).toHaveAttribute(
        "href",
        `mailto:${profile.personalDetails.email}`
      );
    }
  });
});
