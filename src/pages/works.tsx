import { useQuery, gql, DocumentNode } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";
import { Works } from "src/type";

const query: DocumentNode = gql`
  query {
    works {
      title
      langs
      link
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
      {works.map((work: Works, index: number) => (
        <div key={index}>
          <h1>{work.title}</h1>
          {work.langs.map((lang: string, index: number) => (
            <div key={index}>
              <p>{lang}</p>
            </div>
          ))}
          <p>{work.link}</p>
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
