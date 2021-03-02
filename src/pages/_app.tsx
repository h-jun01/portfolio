import { NextPage } from "next";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "src/styles/globalStyle";
import { useApollo } from "src/apollo";
import { SiteHeader } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { theme } from "src/styles/theme";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SiteHeader />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
