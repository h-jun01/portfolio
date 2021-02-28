import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

type Media = "tablet" | "phone";

type Breakpoints = {
  [P in Media]: number;
};

const breakpoints: Breakpoints = {
  tablet: 768,
  phone: 576,
};

export const mediaQuery = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {} as { [P in Media]: Function });
