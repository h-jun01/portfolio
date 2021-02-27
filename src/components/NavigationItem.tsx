import { FC } from "react";
import { useRouter, NextRouter } from "next/router";
import styled, { css } from "styled-components";
import Link from "next/link";

type Props = {
  pathName: "/" | "/works" | "/skills" | "/contact";
  menuName: "🧑🏻‍💻 Profile" | "📙 Works" | "💻 Skills" | "📨 Contact";
};

export const NavigationItem: FC<Props> = ({ pathName, menuName }) => {
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
          border-bottom: 2px solid #f8826c;
        `
      : css`
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.1s;
          &:hover {
            border-bottom: 2px solid #d1d5da;
          }
        `}
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  letter-spacing: 0.05rem;
  color: #242a2f;

  > a {
    display: block;
  }
`;
