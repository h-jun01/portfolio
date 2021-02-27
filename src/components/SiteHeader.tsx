import { FC } from "react";
import { ContentWrapper } from "src/components/ContentWrapper";
import { NavigationItem } from "src/components/NavigationItem";
import styled from "styled-components";

export const SiteHeader: FC = () => {
  return (
    <header>
      <SiteHeaderBackground />
      <ContentWrapper>
        <SiteHeaderContainer>
          <SiteHeaderUserImageContainer>
            <SiteHeaderUserImage src="./images/icon.png" alt="icon" />
          </SiteHeaderUserImageContainer>
          <SiteHeaderNavigationContainer>
            <SiteHeaderProfile>
              <h1>Jun Hashimoto</h1>
              <p>Web Developer</p>
            </SiteHeaderProfile>
            <SiteHeaderNavigation>
              <ul>
                <NavigationItem pathName="/" menuName="🧑🏻‍💻 Profile" />
                <NavigationItem pathName="/works" menuName="📙 Works" />
                <NavigationItem pathName="/skills" menuName="💻 Skills" />
                <NavigationItem pathName="/contact" menuName="📨 Contact" />
              </ul>
            </SiteHeaderNavigation>
          </SiteHeaderNavigationContainer>
        </SiteHeaderContainer>
      </ContentWrapper>
    </header>
  );
};

const SiteHeaderBackground = styled.div`
  height: 190px;
  width: 100vw;
  background-color: #242a2f;
`;

const SiteHeaderContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SiteHeaderUserImageContainer = styled.div`
  position: absolute;
  top: -60px;
  left: 0;
  height: 120px;
  width: 120px;
`;

const SiteHeaderUserImage = styled.img`
  height: 120px;
  width: 120px;
  border: 5px solid #fff;
  border-radius: 60px;
  object-fit: cover;
`;

const SiteHeaderNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
`;

const SiteHeaderProfile = styled.div`
  > h1 {
    font-weight: bold;
    font-size: 25px;
    color: #242a2f;
    letter-spacing: 0.05rem;
  }

  > p {
    font-weight: bold;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.05rem;
  }
`;

const SiteHeaderNavigation = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    width: 420px;
  }
`;
