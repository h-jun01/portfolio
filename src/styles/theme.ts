import "styled-components";

export const theme = {
  fontSizes: {
    xxsmall: "10px",
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "24px",
    xxlarge: "32px",
  },
  colors: {
    baseText: "#242a2f",
    baseBackground: "#fff",
    activeBorder: "#f8826c",
    inactiveBorder: "#d1d5da",
  },
} as const;

type AppTheme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends AppTheme {}
}
