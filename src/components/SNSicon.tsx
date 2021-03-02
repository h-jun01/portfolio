import { FC } from "react";
import styled from "styled-components";

type Props = {
  imagePath: string;
  altText: string;
};

export const SNSicon: FC<Props> = (props) => {
  const { imagePath, altText } = props;

  return (
    <IconWrapper>
      <IconImage src={imagePath} alt={altText} />
    </IconWrapper>
  );
};

const IconWrapper = styled.p`
  margin-right: 20px;
`;
const IconImage = styled.img`
  width: 25px;
`;
