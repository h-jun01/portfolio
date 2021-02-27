export const config = {
  siteMeta: {
    title: "Portfolio | JunHashimoto",
    description: "Portfolio",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://portfolio.h-jun01.vercel.app"
      : "http://localhost:3000",
  headerItems: {
    name: "Jun Hashimoto",
    job: "Web Developer",
  },
} as const;
