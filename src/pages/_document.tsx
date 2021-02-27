import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<{
    styles: JSX.Element;
    html: string;
    head?: (JSX.Element | null)[];
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Portfolio | JunHashimoto"
          />
          <meta name="description" content="Portfolio | JunHashimoto" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta property="og:url" content="../../public/images/icon.jpg" /> */}
          <meta property="og:title" content="Portfolio | JunHashimoto" />
          <meta property="og:description" content="Portfolio | JunHashimoto" />
          {/* <meta property="og:image" content="../../public/images/icon.jpg" />
          <link rel="shortcut icon" href="../../public/images/icon.jpg" />
          <link
            rel="apple-touch-icon-precomposed"
            href="../../public/images/icon.jpg"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
