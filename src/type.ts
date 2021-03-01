export type Profile = {
  japaneseName: string;
  englishName: string;
  github: string;
  selfIntroduction: string;
};

export type Works = {
  title: string;
  langs: string[];
  url: string;
  imagePath: string;
  date: string;
};

export type Skills = {
  lang: string;
};
