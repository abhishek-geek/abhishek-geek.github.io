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
      expect(screen.getAllByText(job.jobTitle).length).toBeGreaterThan(0);
    }
    for (const project of profile.personalProjects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
    expect(screen.getByText(profile.education[0].institute)).toBeInTheDocument();
  });

  it("does not render a résumé link", () => {
    render(<App />);
    expect(screen.queryByRole("link", { name: /résumé|resume/i })).toBeNull();
  });

  it("toggles between dark and light theme and persists the choice", async () => {
    localStorage.clear();
    document.documentElement.dataset.theme = "";
    render(<App />);

    const toggle = screen.getByRole("button", { name: /switch to light theme/i });
    expect(document.documentElement.dataset.theme).toBe("dark");

    await userEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(
      screen.getByRole("button", { name: /switch to dark theme/i })
    ).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", { name: /switch to dark theme/i })
    );
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
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
