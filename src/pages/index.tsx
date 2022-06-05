import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useIntl } from 'react-intl';

import { DefaultLayout } from 'components/layouts/defaultLayout';
import { Welcome } from 'components/pages/home/welcome/welcome';
import { serverSideTranslations } from 'utils/serverSideTranslations';

const HomePage: NextPage = () => {
  const intl = useIntl();

  return (
    <DefaultLayout>
      <NextSeo
        title={intl.formatMessage({ id: 'home:homePage.title', defaultMessage: 'Főoldal' })}
      />
      <Welcome />
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {
      ...(await serverSideTranslations({ locale: ctx.locale })),
    },
  };
};

export default HomePage;
