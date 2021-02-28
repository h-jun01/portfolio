import { NextPage } from "next";
import { ContentWrapper } from "src/components/ContentWrapper";
import Link from "next/link";
import styled from "styled-components";

const Page: NextPage = () => {
  return (
    <Error>
      <ContentWrapper>
        <ErrorStatus>404</ErrorStatus>
        <ErrorMessage>Page not found...</ErrorMessage>
        <ErrorActions>
          <Link href="/" passHref>
            <LinkBackHome>Back Home</LinkBackHome>
          </Link>
        </ErrorActions>
      </ContentWrapper>
    </Error>
  );
};

const Error = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

const ErrorStatus = styled.div`
  font-size: 110px;
  font-weight: 700;
  line-height: 1.2;
`;

const ErrorMessage = styled.h1`
  color: ${({ theme }) => theme.colors.scaleGray1};
`;

const ErrorActions = styled.nav`
  margin-top: 3rem;
`;

const LinkBackHome = styled.a`
  font-size: 0.95rem;
  padding: 0.7em 1.3em;
  color: ${({ theme }) => theme.colors.scaleWhite};
  background: ${({ theme }) => theme.colors.scalePurple1};
`;

export default Page;
