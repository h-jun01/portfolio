import { NextPage } from "next";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo";
import { AppProps } from "next/app";
import { GlobalStyle } from "src/styles/globalStyle";
import { SiteHeader } from "src/components/Header";
import { Footer } from "src/components/Footer";
import "src/styles/globals.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <SiteHeader />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
};

export default MyApp;
