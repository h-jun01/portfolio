import { FC } from "react";
import { ContentWrapper } from "src/components/ContentWrapper";
import { NavigationItem } from "src/components/NavigationItem";
import { config } from "@site.config";
import { mediaQuery } from "src/styles/mediaQuery";
import styled from "styled-components";

export const SiteHeader: FC = () => {
  return (
    <HeaderContainer>
      <HeaderBackground />
      <ContentWrapper>
        <HeaderItemContainer>
          <HeaderUserImageContainer>
            <HeaderUserImage src="./images/icon.png" alt="icon" />
          </HeaderUserImageContainer>
          <HeaderNavigationContainer>
            <HeaderProfile>
              <h1>{config.headerItems.name}</h1>
              <p>{config.headerItems.job}</p>
            </HeaderProfile>
            <HeaderNavigation>
              <ul>
                <NavigationItem pathName="/" menuName="🧑🏻‍💻 Profile" />
                <NavigationItem pathName="/works" menuName="📙 Works" />
                <NavigationItem pathName="/skills" menuName="💻 Skills" />
              </ul>
            </HeaderNavigation>
          </HeaderNavigationContainer>
        </HeaderItemContainer>
      </ContentWrapper>
    </HeaderContainer>
  );
};

const imageSize = 130;

const HeaderContainer = styled.header`
  margin-bottom: 3rem;
`;

const HeaderBackground = styled.div`
  height: 190px;
  width: 100vw;
  background-color: #242a2f;
`;

const HeaderItemContainer = styled.div`
  position: relative;
  width: 100%;
`;

const HeaderUserImageContainer = styled.div`
  position: absolute;
  top: -65px;
  left: 0;
  height: ${imageSize}px;
  width: ${imageSize}px;
  ${mediaQuery.tablet`
    left: 50%;
    transform:translateX(-50%);
  `}
  ${mediaQuery.phone`
    left: 50%;
    transform:translateX(-50%);
    height: ${imageSize - 5}px;
    width: ${imageSize - 5}px;
  `}
`;

const HeaderUserImage = styled.img`
  height: ${imageSize}px;
  width: ${imageSize}px;
  border: 6px solid ${({ theme }) => theme.colors.scaleWhite};
  border-radius: 180px;
  object-fit: cover;
  ${mediaQuery.phone`
    height: ${imageSize - 5}px;
    width: ${imageSize - 5}px;
    border-radius: 180px;
  `}
`;

const HeaderNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 65px;
  ${mediaQuery.tablet`
    display: block;
    text-align: center;
  `}
  ${mediaQuery.phone`
    display: block;
    text-align: center;
  `}
`;

const HeaderProfile = styled.div`
  > h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  }

  > p {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.scaleGray2};
  }
`;

const HeaderNavigation = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    width: 500px;
    ${mediaQuery.tablet`
      width: 100%;
      margin-top: 1.5rem;
    `}
    ${mediaQuery.phone`
      width: 100%;
      margin-top: 1.5rem;
    `}
  }
`;
