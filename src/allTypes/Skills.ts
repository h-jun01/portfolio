import { objectType } from "@nexus/schema";
import { NexusObjectTypeDef } from "@nexus/schema/dist/core";

export const Skills: NexusObjectTypeDef<"Skills"> = objectType({
  name: "Skills",
  definition(t) {
    t.string("item");
    t.string("lang");
    t.string("imagePath");
    t.int("level");
  },
});
