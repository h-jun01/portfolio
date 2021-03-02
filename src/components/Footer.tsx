import { FC, useMemo } from "react";
import { ContentWrapper } from "src/components/ContentWrapper";
import styled from "styled-components";

export const Footer: FC = () => {
  const fullYear: number = useMemo<number>(() => {
    const d: Date = new Date();
    return d.getFullYear();
  }, []);

  return (
    <FooterContainer>
      <ContentWrapper>
        <Copyright>©{fullYear} JunHashimoto</Copyright>
      </ContentWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Copyright = styled.small`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.scaleGray3};
  text-align: center;
  letter-spacing: 0.1rem;
`;
