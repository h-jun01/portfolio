import {
  useQuery,
  gql,
  DocumentNode,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";
import { PageSEO } from "src/components/PageSEO";
import { ContentWrapper } from "src/components/ContentWrapper";

const query: DocumentNode = gql`
  query {
    profile {
      japaneseName
      englishName
      github
    }
  }
`;

const Page: NextPage = () => {
  const { data, loading } = useQuery(query);
  const { profile } = data;

  if (loading) return <span>loading...</span>;

  return (
    <main>
      <PageSEO
        title="JunHashimoto | Profile"
        path="/"
        removeSiteNameFromTitle={true}
      />
      <ContentWrapper>
        <h3>🧑🏻‍💻 Profile</h3>
        <h3>📣 SNS</h3>
      </ContentWrapper>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();

  await apolloClient.query({
    query: query,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Page;
