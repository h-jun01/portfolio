import { FC } from "react";
import { useRouter, NextRouter } from "next/router";
import { mediaQuery } from "src/styles/mediaQuery";
import styled, { css } from "styled-components";
import Link from "next/link";

type Props = {
  pathName: "/" | "/works" | "/skills" | "/contact";
  menuName: "🧑🏻‍💻 Profile" | "📙 Works" | "💻 Skills" | "📨 Contact";
};

export const NavigationItem: FC<Props> = (props) => {
  const { pathName, menuName } = props;
  const router: NextRouter = useRouter();

  return (
    <NavigationItemList isActive={router.pathname === pathName}>
      <Link href={pathName} passHref>
        <a>{menuName}</a>
      </Link>
    </NavigationItemList>
  );
};

const NavigationItemList = styled.li<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          border-bottom: 2px solid ${({ theme }) => theme.colors.activeBorder};
        `
      : css`
          color: ${({ theme }) => theme.colors.scaleGray4};
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.1s;
          &:hover {
            border-bottom: 2px solid
              ${({ theme }) => theme.colors.inactiveBorder};
          }
        `}
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  ${mediaQuery.phone`
    font-size: ${({ theme }) => theme.fontSizes.large};
  `}

  > a {
    display: block;
  }
`;
