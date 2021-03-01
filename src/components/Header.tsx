import { FC } from "react";
import { ContentWrapper } from "src/components/ContentWrapper";
import { NavigationItem } from "src/components/NavigationItem";
import { config } from "@site.config";
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
                <NavigationItem pathName="/contact" menuName="📨 Contact" />
              </ul>
            </HeaderNavigation>
          </HeaderNavigationContainer>
        </HeaderItemContainer>
      </ContentWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  margin-bottom: 3rem;
`;

const HeaderBackground = styled.div`
  height: 190px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.scaleBlack};
`;

const HeaderItemContainer = styled.div`
  position: relative;
  width: 100%;
`;

const HeaderUserImageContainer = styled.div`
  position: absolute;
  top: -60px;
  left: 0;
  height: 120px;
  width: 120px;
`;

const HeaderUserImage = styled.img`
  height: 120px;
  width: 120px;
  border: 5px solid ${({ theme }) => theme.colors.scaleWhite};
  border-radius: 60px;
  object-fit: cover;
`;

const HeaderNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
`;

const HeaderProfile = styled.div`
  > h1 {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  > p {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.scaleGray2};
  }
`;

const HeaderNavigation = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    width: 420px;
  }
`;
