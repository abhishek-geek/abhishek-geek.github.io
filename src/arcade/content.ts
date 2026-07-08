import type { Company, PersonalProject, Profile, SkillItem } from "../types";

/**
 * Maps the shared `me.json` profile onto the arcade (gamified) view model.
 * Everything the resume actually contains is derived from the profile; the
 * purely decorative arcade flavour (XP totals, rarities, trophy copy) lives in
 * small constant tables here so the data file stays presentation-agnostic.
 */

export const PALETTE = {
  green: "#7dff9b",
  cyan: "#5cd8ff",
  purple: "#c08bff",
  gold: "#ffcf5c",
} as const;

const QUEST_ACCENTS = [PALETTE.green, PALETTE.cyan, PALETTE.purple, PALETTE.gold];

/** Decorative XP rewards per quest (by company order), scaled to tenure. */
const QUEST_XP = ["4,200", "8,600", "1,400"];

const ICON_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/";

export interface Ability {
  name: string;
  iconUrl: string | null;
  mono: string | null;
}

export interface SkillTreeCategory {
  num: string;
  category: string;
  items: Ability[];
}

export interface QuestRole {
  chapter: string | null;
  title: string;
  period: string;
  bullets: string[];
}

export interface Quest {
  type: string;
  status: string;
  statusIcon: string;
  color: string;
  company: string;
  url: string | null;
  period: string;
  /** Decorative XP reward shown top-right of the quest card. */
  xp: string;
  roles: QuestRole[];
  loot: string[];
}

export interface SideQuest {
  num: string;
  icon: string;
  rarity: string;
  color: string;
  name: string;
  description: string;
  tech: string[];
  url: string | null;
  linkLabel: string;
}

export interface Trophy {
  icon: string;
  title: string;
  desc: string;
  rarity: string;
  color: string;
  glow: string;
}

export interface Social {
  label: string;
  url: string;
}

export interface StatBar {
  label: string;
  pct: number;
}

/** Decorative attribute bars — curated, not present in the resume data. */
export const STATS: StatBar[] = [
  { label: "Backend Engineering", pct: 94 },
  { label: "Distributed Systems", pct: 88 },
  { label: "Databases", pct: 91 },
  { label: "Cloud & DevOps", pct: 85 },
  { label: "APIs & Integration", pct: 90 },
  { label: "Problem Solving", pct: 93 },
];

/** Curated career highlights shown as unlockable trophies. */
export const TROPHIES: Trophy[] = [
  { icon: "⚡", title: "400% Faster", desc: "Slashed MongoDB query response times with Atlas Search indexes.", rarity: "LEGENDARY", color: PALETTE.gold, glow: "rgba(255,207,92,0.28)" },
  { icon: "📜", title: "Patent Holder", desc: "GrainShield IoT grain-moisture detection system — patent filed.", rarity: "LEGENDARY", color: PALETTE.gold, glow: "rgba(255,207,92,0.28)" },
  { icon: "🗄️", title: "Scale Master", desc: "Architected services handling 10,000+ daily requests reliably.", rarity: "EPIC", color: PALETTE.purple, glow: "rgba(192,139,255,0.28)" },
  { icon: "🔌", title: "The Integrator", desc: "Shipped 12+ REST / GraphQL / SOAP integrations & npm packages.", rarity: "EPIC", color: PALETTE.purple, glow: "rgba(192,139,255,0.28)" },
  { icon: "🤖", title: "Automation Ace", desc: "Cut manual effort by 35% automating workflows with Temporal.", rarity: "RARE", color: PALETTE.cyan, glow: "rgba(92,216,255,0.26)" },
  { icon: "📈", title: "Engagement +30%", desc: "Real-time notifications microservice that boosted engagement.", rarity: "RARE", color: PALETTE.cyan, glow: "rgba(92,216,255,0.26)" },
];

/** Decorative per-project arcade metadata, indexed by project position. */
const PROJECT_META = [
  { icon: "🌾", rarity: "LEGENDARY", color: PALETTE.gold },
  { icon: "📓", rarity: "RARE", color: PALETTE.cyan },
  { icon: "🚗", rarity: "RARE", color: PALETTE.cyan },
];

function abilityFromSkill(item: SkillItem): Ability {
  return {
    name: item.name,
    iconUrl: item.icon ? `${ICON_BASE}${item.icon}.svg` : null,
    mono: item.icon ? null : item.mono ?? item.name.slice(0, 2),
  };
}

function questTypeFor(company: Company): string {
  const isCurrent = company.roles.some((role) => role.current);
  if (isCurrent) return "MAIN QUEST";
  if (company.roles.length > 1) return `CAMPAIGN · ${company.roles.length} CHAPTERS`;
  return "TUTORIAL QUEST";
}

function uniqueLoot(company: Company): string[] {
  const seen = new Set<string>();
  const loot: string[] = [];
  for (const role of company.roles) {
    for (const skill of role.skills) {
      if (!seen.has(skill)) {
        seen.add(skill);
        loot.push(skill);
      }
    }
  }
  return loot;
}

function questFromCompany(company: Company, index: number): Quest {
  const isCurrent = company.roles.some((role) => role.current);
  const accent = isCurrent ? PALETTE.green : QUEST_ACCENTS[index % QUEST_ACCENTS.length];
  const multiChapter = company.roles.length > 1;
  const total = company.roles.length;

  return {
    type: questTypeFor(company),
    status: isCurrent ? "ACTIVE" : "COMPLETE",
    statusIcon: isCurrent ? "◉" : "✓",
    color: accent,
    company: company.company,
    url: company.website ?? null,
    period: company.span.toUpperCase(),
    xp: QUEST_XP[index] ?? "",
    roles: company.roles.map((role, roleIndex) => ({
      chapter: multiChapter ? `CH.${total - roleIndex}` : null,
      title: role.title,
      period: role.period,
      bullets: role.description,
    })),
    loot: uniqueLoot(company),
  };
}

function sideQuestFromProject(project: PersonalProject, index: number): SideQuest {
  const meta = PROJECT_META[index] ?? { icon: "🎮", rarity: "RARE", color: PALETTE.cyan };
  const primaryLink = project.links[0];
  return {
    num: String(index + 1).padStart(2, "0"),
    icon: meta.icon,
    rarity: meta.rarity,
    color: meta.color,
    name: project.name,
    description: project.description,
    tech: project.techUsed ?? [],
    url: primaryLink?.url ?? null,
    linkLabel: primaryLink ? `VIEW ${primaryLink.name.toUpperCase()}` : "VIEW",
  };
}

export interface ArcadeContent {
  playerName: { first: string; last: string };
  classLabel: string;
  location: string;
  summary: string;
  email: string;
  phoneHref: string;
  phoneLabel: string;
  resumeUrl: string;
  currentCompany: string;
  experienceSummary: string;
  status: string;
  stats: StatBar[];
  ticker: string[];
  quests: Quest[];
  trophies: Trophy[];
  skills: SkillTreeCategory[];
  sideQuests: SideQuest[];
  socials: Social[];
}

export function buildArcadeContent(profile: Profile): ArcadeContent {
  const d = profile.personalDetails;
  const currentCompany =
    profile.companies.find((c) => c.roles.some((r) => r.current))?.company ??
    profile.companies[0]?.company ??
    "";

  const ticker = [
    currentCompany ? `NOW PLAYING: ${currentCompany.toUpperCase()}` : "OPEN TO QUESTS",
    `${profile.companies.length} QUESTS`,
    `${TROPHIES.length} TROPHIES`,
    ...profile.marquee.map((m) => m.toUpperCase()),
    profile.about.experienceSummary.toUpperCase(),
    d.status.toUpperCase(),
  ];

  const phoneDigits = `${d.phone.prefixCode}${d.phone.number}`.replace(/\s+/g, "");

  return {
    playerName: { first: d.name.first, last: d.name.last },
    classLabel: d.role.toUpperCase(),
    location: `${d.currentLocation.city.toUpperCase()}, ${d.currentLocation.country.toUpperCase()}`,
    summary: profile.about.body,
    email: d.email,
    phoneHref: `tel:${phoneDigits}`,
    phoneLabel: `${d.phone.prefixCode} ${d.phone.number}`,
    resumeUrl: d.resumeLink,
    currentCompany,
    experienceSummary: profile.about.experienceSummary,
    status: d.status,
    stats: STATS,
    ticker,
    quests: profile.companies.map(questFromCompany),
    trophies: TROPHIES,
    skills: profile.skills.map((cat, index) => ({
      num: String(index + 1).padStart(2, "0"),
      category: cat.category,
      items: cat.skills.map(abilityFromSkill),
    })),
    sideQuests: profile.personalProjects.map(sideQuestFromProject),
    socials: [
      { label: "GITHUB", url: d.github },
      { label: "LINKEDIN", url: d.linkedin },
      { label: "X / TWITTER", url: d.x },
      { label: "LEETCODE", url: d.leetcode },
      { label: "RÉSUMÉ", url: d.resumeLink },
    ],
  };
}
