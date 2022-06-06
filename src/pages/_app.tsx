import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { defaultSeo } from 'defaultSeo';
import '../styles/globals.css';

interface CustomAppProps extends AppProps {
  pageProps: {
    [key: string]: unknown;
    dehydratedState: unknown;
    translations: Record<string, string>;
  };
}

const CustomApp: FC<CustomAppProps> = ({
  Component,
  pageProps: { dehydratedState, translations, ...pageProps },
}) => {
  const router = useRouter();

  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <DefaultSeo {...defaultSeo} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <IntlProvider locale={router.locale ?? ''} messages={translations}>
            <Component {...pageProps} />
          </IntlProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default CustomApp;
