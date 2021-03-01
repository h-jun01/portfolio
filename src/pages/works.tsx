import {
  useQuery,
  gql,
  DocumentNode,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { NextPage, GetStaticProps } from "next";
import { Works } from "src/type";
import { PageSEO } from "src/components/PageSEO";
import { ContentWrapper } from "src/components/ContentWrapper";
import styled, { css } from "styled-components";

const query: DocumentNode = gql`
  query {
    works {
      title
      langs
      url
      imagePath
      date
    }
  }
`;

const Page: NextPage = () => {
  const { data, loading } = useQuery(query);
  const { works } = data;

  if (loading) return <span>loading...</span>;

  return (
    <main>
      <PageSEO
        title="JunHashimoto | Works"
        path="/works"
        removeSiteNameFromTitle={true}
      />
      <ContentWrapper>
        <CardContainer>
          {works.map((work: Works, index: number) => (
            <Card key={index}>
              <a href={work.url} target="_brank">
                <CardImageFrame imagePath={work.imagePath} />
                <CardTextBox>
                  <CardDateTest>{work.date}</CardDateTest>
                  <CardTitleText>{work.title}</CardTitleText>
                  <CardOverviewText>
                    {work.langs.map((lang: string, index: number) => (
                      <CardTag key={index}>{lang}</CardTag>
                    ))}
                  </CardOverviewText>
                </CardTextBox>
              </a>
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
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.1em;
`;

const Card = styled.section`
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.16);
  overflow: auto;
  min-width: 0;
`;

const CardImageFrame = styled.div<{ imagePath: string }>`
  width: 100%;
  height: auto;
  padding-top: 68%;
  ${({ imagePath }) =>
    css`
      background: url(${imagePath}) no-repeat center;
    `}
  background-size: cover;
`;

const CardTextBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 18px;
  > * + * {
    margin-top: 5px;
  }
`;

const CardDateTest = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.scaleGray2};
`;

const CardTitleText = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;

const CardOverviewText = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const CardTag = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  color: ${({ theme }) => theme.colors.scaleGray5};
  border: 1px solid ${({ theme }) => theme.colors.scaleGray5};
  border-radius: 20px;
  padding: 2px 8px;
  margin-right: 5px;
  margin-bottom: 5px;
  letter-spacing: 0.03rem;
`;

export default Page;
