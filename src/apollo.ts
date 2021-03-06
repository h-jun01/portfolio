import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createIsomorphicLink = () => {
  if (typeof window === "undefined") {
    // server
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("./schema");
    return new SchemaLink({ schema });
  } else {
    // client
    const { HttpLink } = require("@apollo/client/link/http");
    return new HttpLink({ uri: "/api/graphql" });
  }
};

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = null) => {
  const _apolloClient: ApolloClient<NormalizedCacheObject> =
    apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
};

export const useApollo = (initialState) => {
  const store: ApolloClient<NormalizedCacheObject> = useMemo(
    () => initializeApollo(initialState),
    [initialState]
  );
  return store;
};
