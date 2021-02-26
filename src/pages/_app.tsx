import { NextPage } from "next";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo";
import { AppProps } from "next/app";
import { SiteHeader } from "src/components/SiteHeader";
import { SiteFooter } from "src/components/SiteFooter";
import "src/styles/globals.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </ApolloProvider>
  );
};

export default MyApp;
