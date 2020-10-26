import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";

const ResumeQuery = gql`
  query {
    profile {
      github
    }
    works {
      langs
    }
  }
`;

export default function Home() {
  const { data, loading } = useQuery(ResumeQuery);

  if (loading) return <span>loading...</span>;

  // const { profile, works } = data;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <div>
        <h1>{profile.japaneseName}</h1>
        <h1>{works[0].title}</h1>
      </div> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ResumeQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
