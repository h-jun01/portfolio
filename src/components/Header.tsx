import { FC } from "react";
import { ContentWrapper } from "src/components/ContentWrapper";
import { NavigationItem } from "src/components/NavigationItem";
import styled from "styled-components";

export const SiteHeader: FC = () => {
  return (
    <header>
      <HeaderBackground />
      <ContentWrapper>
        <HeaderContainer>
          <HeaderUserImageContainer>
            <HeaderUserImage src="./images/icon.png" alt="icon" />
          </HeaderUserImageContainer>
          <HeaderNavigationContainer>
            <HeaderProfile>
              <h1>Jun Hashimoto</h1>
              <p>Web Developer</p>
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
        </HeaderContainer>
      </ContentWrapper>
    </header>
  );
};

const HeaderBackground = styled.div`
  height: 190px;
  width: 100vw;
  background-color: #242a2f;
`;

const HeaderContainer = styled.div`
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
  border: 5px solid #fff;
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

const HeaderNavigation = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    width: 420px;
  }
`;
