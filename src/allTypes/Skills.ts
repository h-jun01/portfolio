import { objectType } from "@nexus/schema";

export const Skills = objectType({
  name: "Skills",
  definition(t) {
    t.string("lang");
  },
});
