import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { Works } from "src/type";

const query = gql`
  query {
    works {
      title
      langs
      links
      date
      content
    }
  }
`;

const Works: React.FC = () => {
  const { data, loading } = useQuery(query);
  const { works } = data;

  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {works.map((work: Works, index: number) => (
        <div key={index}>
          <h1>{work.title}</h1>
          {work.langs.map((lang, index) => (
            <p key={index}>{lang}</p>
          ))}
        </div>
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

export default Works;
