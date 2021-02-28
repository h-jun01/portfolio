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
      <ContentWrapper>
        <PageSEO
          title="JunHashimoto | Profile"
          path="/"
          removeSiteNameFromTitle={true}
        />
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <div>
          <h1>{profile.japaneseName}</h1>
          <p>{profile.englishName}</p>
          <p>{profile.github}</p>
        </div>
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
