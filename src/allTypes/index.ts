import { decorateType } from "@nexus/schema";
import { GraphQLURL } from "graphql-scalars";
import { GraphQLScalarType } from "graphql";

export const GQLURL: GraphQLScalarType = decorateType(GraphQLURL, {
  rootTyping: "URL",
  asNexusMethod: "url",
});

export * from "./Query";
export * from "./Profile";
export * from "./Works";
export * from "./Skills";
