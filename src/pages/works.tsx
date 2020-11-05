import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";

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

const Page: NextPage = () => {
  const { data, loading } = useQuery(query);
  const { works } = data;

  if (loading) return <span>loading...</span>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {works.map((work, index: number) => (
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