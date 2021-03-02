import "styled-components";

export const theme = {
  fontSizes: {
    xxsmall: "10px",
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
    xxlarge: "22px",
    xxxlarge: "24px",
    xxxxlarge: "26px",
  },
  colors: {
    scaleBlack: "#242a2f",
    scaleWhite: "#fff",
    scaleGray1: "rgba(212, 231, 241, 0.9)",
    scaleGray2: "#999",
    scaleGray3: "#e4e4e4",
    scaleGray4: "#666",
    scaleGray5: "#a7a7a7",
    scalePurple1: "#9060ff",
    activeBorder: "#f8826c",
    inactiveBorder: "#d1d5da",
  },
} as const;

type AppTheme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends AppTheme {}
}
