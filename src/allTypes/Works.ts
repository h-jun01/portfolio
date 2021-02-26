import { objectType } from "@nexus/schema";

export const Works = objectType({
  name: "Works",
  definition(t) {
    t.string("title");
    t.list.string("langs");
    t.string("link");
    t.string("date");
    t.string("content");
  },
});
