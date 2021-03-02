import { makeSchema } from "@nexus/schema";
import { NexusGraphQLSchema } from "@nexus/schema/dist/core";
import * as types from "./allTypes/index";
import path from "path";

export const schema: NexusGraphQLSchema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), "src", "schema.graphql"),
    typegen: path.join(process.cwd(), "src", "generated", "nexus.ts"),
  },
  typegenAutoConfig: {
    sources: [
      {
        alias: "faces",
        source: path.join(process.cwd(), "src", "type.ts"),
        typeMatch: (type) => new RegExp(`(${type})`),
      },
    ],
    backingTypeMap: {
      Date: "Date",
      URL: "URL",
    },
    debug: process.env.NODE_ENV === "development",
  },
});
