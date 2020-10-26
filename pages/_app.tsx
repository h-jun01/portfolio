import { ApolloProvider, useApolloClient } from "@apollo/client";
import { useApollo } from "src/apollo";

const MyApp = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
