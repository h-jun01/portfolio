export interface ProfileInterface {
  japaneseName: string;
  englishName: string;
  github: string;
  selfIntroduction: string;
}

export interface WorksInterface {
  title: string;
  langs: string[];
  links: string[];
  date: string;
  content: string;
}

export interface SkillsInterface {
  lang: string;
}
