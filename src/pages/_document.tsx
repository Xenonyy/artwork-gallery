import { Html, Head, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const CustomDocument: FC = () => {
  return (
    <Html>
      <Head>
        <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/manifest.json" rel="manifest" />
        <link color="#5bbad5" href="/favicon/safari-pinned-tab.svg" rel="mask-icon" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content="#da532c" name="msapplication-TileColor" />
        <meta content="/favicon/browserconfig.xml" name="msapplication-config" />
        <meta content="#ffffff" name="theme-color" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
