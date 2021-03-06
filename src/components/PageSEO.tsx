import { FC } from "react";
import { config } from "@site.config";
import Head from "next/head";

type Props = {
  title: string;
  path?: string;
  description?: string;
  ogImageUrl?: string;
  removeSiteNameFromTitle?: boolean;
};

export const PageSEO: FC<Props> = (props) => {
  const {
    path,
    title,
    description,
    ogImageUrl,
    removeSiteNameFromTitle,
  } = props;

  const pageUrl = `${config.siteRoot}${path || ""}`;

  return (
    <Head>
      <title>
        {removeSiteNameFromTitle
          ? title
          : `${title} | ${config.siteMeta.title}`}
      </title>
      <meta charSet="utf-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={config.siteMeta.title} />
      <meta name="description" content={config.siteMeta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site" content={config.siteMeta.title} />
      <meta
        property="og:image"
        content={ogImageUrl || `${config.siteRoot}/og.png`}
      />
      {!!description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {path && <link rel="canonical" href={pageUrl} />}
      <meta name="robots" content="noindex" />
    </Head>
  );
};
