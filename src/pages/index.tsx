import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useIntl } from 'react-intl';

import { DefaultLayout } from 'components/layouts/defaultLayout';
import { GalleryListPage } from 'components/pages/gallery-list/galleryList';
import { serverSideTranslations } from 'utils/serverSideTranslations';

const HomePage: NextPage = () => {
  const intl = useIntl();

  return (
    <DefaultLayout>
      <NextSeo title={intl.formatMessage({ id: 'home:tab.title', defaultMessage: 'Homepage' })} />
      <GalleryListPage />
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
