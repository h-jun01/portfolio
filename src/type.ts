export type Profile = {
  japaneseName: string;
  englishName: string;
  github: string;
  selfIntroduction: string;
};

export type Works = {
  title: string;
  langs: string[];
  link: string;
  date: string;
  content: string;
};

export type Skills = {
  lang: string;
};
