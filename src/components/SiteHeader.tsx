import { FC } from "react";
import styled from "styled-components";
import { ContentWrapper } from "src/components/ContentWrapper";
import { NavigationItem } from "src/components/NavigationItem";

export const SiteHeader: FC = () => {
  return (
    <header className="site-header">
      <div className="site-header__header-image"></div>
      <ContentWrapper>
        <div className="site-header__inners">
          <div className="site-header__user-image">
            <img src="./images/icon.png" alt="a" />
          </div>
          <div className="site-header__a">
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
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

const SiteHeaderNavigation = styled.nav`
  > ul {
    display: flex;
    justify-content: space-between;
    width: 420px;
  }
`;

const SiteHeaderProfile = styled.div`
  > h1 {
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 0.05rem;
    color: #242a2f;
  }

  > p {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.05rem;
    color: #999999;
  }
`;
