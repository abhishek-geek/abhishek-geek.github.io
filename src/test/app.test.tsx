import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    expect(d.tagline).toBeTruthy();
    expect(d.status).toBeTruthy();
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
    expect(profile.marquee.length).toBeGreaterThan(0);
    expect(profile.about.statement).toBeTruthy();
  });
});

describe("App", () => {
  it("renders every section with data from me.json", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /abhishek/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Selected Projects" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Toolkit" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();

    for (const job of profile.workExperiences) {
      expect(screen.getAllByText(job.jobTitle).length).toBeGreaterThan(0);
    }
    for (const project of profile.personalProjects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
    expect(
      screen.getByText(new RegExp(profile.education[0].institute))
    ).toBeInTheDocument();
  });

  it("renders the résumé link from me.json", () => {
    render(<App />);
    const resume = screen.getAllByRole("link", { name: /résumé/i });
    expect(resume.length).toBeGreaterThan(0);
    for (const link of resume) {
      expect(link).toHaveAttribute("href", profile.personalDetails.resumeLink);
    }
  });

  it("defaults to light theme, toggles to dark, and persists the choice", async () => {
    localStorage.clear();
    document.documentElement.dataset.theme = "";
    render(<App />);

    const toggle = screen.getByRole("button", { name: /switch to dark theme/i });
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(toggle).toHaveTextContent("Dark");

    await userEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    await userEvent.click(
      screen.getByRole("button", { name: /switch to light theme/i })
    );
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
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
