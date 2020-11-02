import { decorateType } from "@nexus/schema";
import { GraphQLDate, GraphQLURL } from "graphql-scalars";

export const GQLURL = decorateType(GraphQLURL, {
  rootTyping: "URL",
  asNexusMethod: "url",
});

export * from "./Query";
export * from "./Profile";
export * from "./Works";
export * from "./Skills";
