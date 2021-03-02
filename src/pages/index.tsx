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
import { SNSicon } from "src/components/SNSicon";
import styled from "styled-components";

const query: DocumentNode = gql`
  query {
    profile {
      japaneseName
      englishName
      github
      selfIntroduction
      interest
      hobby
    }
  }
`;

const Page: NextPage = () => {
  const { data, loading } = useQuery(query);
  const { profile } = data;

  if (loading) return <span>loading...</span>;

  return (
    <main>
      <PageSEO
        title="JunHashimoto | Profile"
        path="/"
        removeSiteNameFromTitle={true}
      />
      <ContentWrapper>
        {/* profile */}
        <ProfileItemContainer>
          <ProfileHeading>🧑🏻‍💻 Profile</ProfileHeading>
          {profile.selfIntroduction.map((item: string, index: number) => (
            <SelfIntroduction key={index}>{item}</SelfIntroduction>
          ))}
        </ProfileItemContainer>
        {/* Interest */}
        <ProfileItemContainer>
          <ProfileHeading>🤔 Interest</ProfileHeading>
          {profile.interest.map((item: string, index: number) => (
            <SelfIntroduction key={index}>{item}</SelfIntroduction>
          ))}
        </ProfileItemContainer>
        {/* Hobby */}
        <ProfileItemContainer>
          <ProfileHeading>😆 Hobby</ProfileHeading>
          {profile.hobby.map((item: string, index: number) => (
            <SelfIntroduction key={index}>{item}</SelfIntroduction>
          ))}
        </ProfileItemContainer>
        {/* SNS */}
        <ProfileItemContainer>
          <ProfileHeading>📣 SNS</ProfileHeading>
          <IconContainer>
            <SNSicon imagePath="./icons/twitter.png" altText="twitter" />
            <SNSicon imagePath="./icons/insta.png" altText="insta" />
            <SNSicon imagePath="./icons/github.png" altText="github" />
          </IconContainer>
        </ProfileItemContainer>
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

const ProfileItemContainer = styled.section`
  margin-bottom: 3.2rem;
`;

const ProfileHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 0.7rem;
`;

const SelfIntroduction = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default Page;
