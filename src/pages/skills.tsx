import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";

const query = gql`
  query {
    skills {
      lang
    }
  }
`;

const Skills = () => {
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

export const getStaticProps = async () => {
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

export default Skills;
