import { queryType } from "@nexus/schema";
import { data } from "src/data";
import { Profile, Works, Skills } from "./index";

export const Query = queryType({
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
