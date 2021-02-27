import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export const ContentWrapper: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.3rem;
`;
