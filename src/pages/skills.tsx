import {
  useQuery,
  gql,
  DocumentNode,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";
import { ContentWrapper } from "src/components/ContentWrapper";
import { PageSEO } from "src/components/PageSEO";
import { Skills } from "src/type";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { mediaQuery } from "src/styles/mediaQuery";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";

const query: DocumentNode = gql`
  query {
    skills {
      item
      lang
      imagePath
      level
    }
  }
`;

const Page: NextPage = () => {
  const { data, loading } = useQuery(query);
  const { skills } = data;

  if (loading) return <span>loading...</span>;

  return (
    <main>
      <PageSEO
        title="JunHashimoto | Skill"
        path="/skill"
        removeSiteNameFromTitle={true}
      />
      <ContentWrapper>
        <CardContainer>
          {skills.map((skill: Skills, index: number) => (
            <Card key={index}>
              <CardCircularProgressFrame>
                <CircularProgressbarWithChildren
                  value={skill.level}
                  strokeWidth={6}
                >
                  <CardLangImage src={skill.imagePath} alt="logo" />
                </CircularProgressbarWithChildren>
              </CardCircularProgressFrame>
              <CardTextBox>
                <CardTitleText>{skill.lang}</CardTitleText>
              </CardTextBox>
            </Card>
          ))}
        </CardContainer>
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

const CardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 2em;
  ${mediaQuery.tablet`
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1.5em;
  `}
  ${mediaQuery.phone`
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    grid-gap: 1em;
  `}
`;

const Card = styled.section`
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
  overflow: auto;
  min-width: 0;
`;

const CardCircularProgressFrame = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 30px;
  ${mediaQuery.phone`
    padding: 15px 25px;
  `}
`;

const CardLangImage = styled.img`
  width: 65%;
  padding: 20px;
  ${mediaQuery.phone`
    padding: 15px;
  `}
`;

const CardTextBox = styled.div`
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.scaleGray3};
`;

const CardTitleText = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  margin: 20px 0;
  ${mediaQuery.phone`
    margin: 13px 0;
  `}
`;

export default Page;
