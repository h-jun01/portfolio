import { queryType } from "@nexus/schema";
import { NexusObjectTypeDef } from "@nexus/schema/dist/core";
import { data } from "@data.config";
import { Profile, Works, Skills } from "./index";

export const Query: NexusObjectTypeDef<"Query"> = queryType({
  definition(t) {
    t.field("profile", {
      type: Profile,
      resolve: () => data.profile,
    });
    t.list.field("works", {
      type: Works,
      resolve: () => data.works,
    });
    t.list.field("skills", {
      type: Skills,
      resolve: () => data.skills,
    });
  },
});
