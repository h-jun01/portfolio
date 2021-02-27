import { useQuery, gql, NormalizedCacheObject } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

const query = gql`
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
    <div>
      <Head>
        <title>JunHashimoto | Profile</title>
      </Head>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <h1>{profile.japaneseName}</h1>
        <p>{profile.englishName}</p>
        <p>{profile.github}</p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

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
