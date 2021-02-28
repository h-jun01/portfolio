import { objectType } from "@nexus/schema";
import { NexusObjectTypeDef } from "@nexus/schema/dist/core";

export const Works: NexusObjectTypeDef<"Works"> = objectType({
  name: "Works",
  definition(t) {
    t.string("title");
    t.list.string("langs");
    t.string("link");
    t.string("date");
    t.string("content");
  },
});
