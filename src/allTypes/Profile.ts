import { objectType } from "@nexus/schema";

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.string("japaneseName");
    t.string("englishName");
    t.url("github", (profile) => new URL(profile.github));
    t.string("selfIntroduction");
  },
});
