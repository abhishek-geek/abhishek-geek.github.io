export interface PersonalDetails {
  name: { first: string; last: string };
  role: string;
  description: string;
  email: string;
  phone: { prefixCode: string; number: string };
  currentLocation: { city: string; state: string; country: string };
  linkedin: string;
  github: string;
  x: string;
  leetcode: string;
  resumeLink: string;
  tagline: string;
  status: string;
}

export interface About {
  statement: string;
  body: string;
  focus: string;
  experienceSummary: string;
}

export interface Role {
  title: string;
  period: string;
  current: boolean;
  description: string[];
  skills: string[];
}

export interface Company {
  id: number;
  company: string;
  website?: string;
  /** Full range at the company, e.g. "Jan 2022 - 2025" */
  span: string;
  /** Short tenure label, e.g. "Current", "3 yrs · 3 roles", "Internship" */
  tenure: string;
  roles: Role[];
}

export interface Education {
  id: number;
  institute: string;
  duration: string;
  degree: string;
  courses: string[];
}

export interface ProjectLink {
  name: string;
  url: string;
}

export interface PersonalProject {
  id: number;
  name: string;
  tag?: string;
  description: string;
  links: ProjectLink[];
  techUsed?: string[];
}

export interface SkillItem {
  name: string;
  /** simple-icons slug (https://simpleicons.org), rendered as a masked icon */
  icon?: string;
  /** 2–3 letter fallback badge when no icon slug exists */
  mono?: string;
}

export interface SkillCategory {
  id: number;
  category: string;
  skills: SkillItem[];
}

export interface Profile {
  personalDetails: PersonalDetails;
  about: About;
  marquee: string[];
  companies: Company[];
  education: Education[];
  personalProjects: PersonalProject[];
  skills: SkillCategory[];
}
