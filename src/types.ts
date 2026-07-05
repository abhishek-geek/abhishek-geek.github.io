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
}

export interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  companyWebsite?: string;
  duration: string;
  description: string[];
  skills: string[];
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
  description: string;
  links: ProjectLink[];
  techUsed?: string[];
}

export interface SkillCategory {
  id: number;
  category: string;
  skills: string[];
}

export interface Profile {
  personalDetails: PersonalDetails;
  workExperiences: WorkExperience[];
  education: Education[];
  personalProjects: PersonalProject[];
  skills: SkillCategory[];
}
