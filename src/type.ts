export type Profile = {
  japaneseName: string;
  englishName: string;
  github: string;
  selfIntroduction: string[];
  interest: string[];
  hobby: string[];
};

export type Works = {
  title: string;
  langs: string[];
  url: string;
  imagePath: string;
  date: string;
};

export type Skills = {
  item: string;
  lang: string;
  imagePath: string;
  level: number;
};
