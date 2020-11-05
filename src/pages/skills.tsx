import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";

const query = gql`
  query {
    skills {
      lang
    }
  }
`;

const Page: NextPage = () => {
  const { data, loading } = useQuery(query);

  if (loading) return <span>loading...</span>;

  const { skills } = data;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {skills.map((skill) => (
        <p>{skill.lang}</p>
      ))}
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
