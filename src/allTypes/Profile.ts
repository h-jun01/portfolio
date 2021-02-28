import { objectType } from "@nexus/schema";
import { NexusObjectTypeDef } from "@nexus/schema/dist/core";

export const Profile: NexusObjectTypeDef<"Profile"> = objectType({
  name: "Profile",
  definition(t) {
    t.string("japaneseName");
    t.string("englishName");
    t.url("github", (profile) => new URL(profile.github));
    t.string("selfIntroduction");
  },
});
