import { ApolloProvider, useApolloClient } from "@apollo/client";
import { useApollo } from "src/apollo";
import { AppProps } from "next/app";
import { SiteHeader } from "src/components/SiteHeader";
import { TabMenu } from "src/components/TabMenu";
import "src/styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <TabMenu />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
