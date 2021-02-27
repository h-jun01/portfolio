import {
  useQuery,
  gql,
  DocumentNode,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";
import { Skills } from "src/type";

const query: DocumentNode = gql`
  query {
    skills {
      lang
    }
  }
`;

const Page: NextPage = () => {
  const { data, loading } = useQuery(query);
  const { skills } = data;

  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {skills.map((skill: Skills, index: number) => (
        <p key={index}>{skill.lang}</p>
      ))}
    </div>
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
