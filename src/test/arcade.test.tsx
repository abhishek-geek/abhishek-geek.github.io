import { render, screen } from "@testing-library/react";
import ArcadeApp from "../arcade/ArcadeApp";
import { buildArcadeContent } from "../arcade/content";
import profileData from "../data/me.json";
import type { Profile } from "../types";

const profile = profileData as Profile;

describe("buildArcadeContent", () => {
  const content = buildArcadeContent(profile);

  it("maps companies to quests preserving roles and loot", () => {
    expect(content.quests).toHaveLength(profile.companies.length);
    content.quests.forEach((quest, i) => {
      const company = profile.companies[i];
      expect(quest.company).toBe(company.company);
      expect(quest.roles).toHaveLength(company.roles.length);
      // Loot is the de-duplicated union of every role's skills.
      const unique = new Set(company.roles.flatMap((r) => r.skills));
      expect(quest.loot).toHaveLength(unique.size);
    });
  });

  it("marks the current company as an active main quest", () => {
    const active = content.quests.find((q) => q.status === "ACTIVE");
    expect(active).toBeDefined();
    expect(active?.type).toBe("MAIN QUEST");
  });

  it("maps every skill category into the skill tree", () => {
    expect(content.skills).toHaveLength(profile.skills.length);
    content.skills.forEach((cat, i) => {
      expect(cat.items).toHaveLength(profile.skills[i].skills.length);
      for (const item of cat.items) {
        expect(item.iconUrl || item.mono).toBeTruthy();
      }
    });
  });

  it("maps personal projects to side quests with resolved links", () => {
    expect(content.sideQuests).toHaveLength(profile.personalProjects.length);
    content.sideQuests.forEach((quest, i) => {
      expect(quest.name).toBe(profile.personalProjects[i].name);
      expect(quest.url).toBe(profile.personalProjects[i].links[0]?.url ?? null);
    });
  });
});

describe("ArcadeApp", () => {
  it("renders the arcade sections from me.json", () => {
    render(<ArcadeApp profile={profile} />);

    expect(
      screen.getByRole("heading", { level: 1, name: /abhishek/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /quest log/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /trophy room/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skill tree/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /side quests/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /join the party/i })).toBeInTheDocument();

    for (const company of profile.companies) {
      expect(screen.getAllByText(company.company).length).toBeGreaterThan(0);
    }
    for (const project of profile.personalProjects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
  });

  it("links the primary CTA and résumé to me.json values", () => {
    render(<ArcadeApp profile={profile} />);

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

    const resume = screen.getByRole("link", { name: /load résumé/i });
    expect(resume).toHaveAttribute("href", profile.personalDetails.resumeLink);
  });

  it("renders skill abilities for a known category", () => {
    render(<ArcadeApp profile={profile} />);
    const languages = profile.skills[0];
    for (const skill of languages.skills) {
      expect(screen.getAllByText(skill.name).length).toBeGreaterThan(0);
    }
  });
});
