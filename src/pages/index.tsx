import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";

const query = gql`
  query {
    profile {
      japaneseName
      englishName
      github
    }
  }
`;

const Profile = () => {
  const { data, loading } = useQuery(query);

  if (loading) return <span>loading...</span>;

  const { profile } = data;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <h1>{profile.japaneseName}</h1>
        <p>{profile.englishName}</p>
        <p>{profile.github}</p>
      </div>
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

export default Profile;
