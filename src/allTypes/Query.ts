import { queryType } from "@nexus/schema";
import { data } from "src/data";
import { Profile, Works } from "./index";

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
  },
});
