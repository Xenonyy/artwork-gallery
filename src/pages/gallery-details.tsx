import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useIntl } from 'react-intl';

import { DefaultLayout } from 'components/layouts/defaultLayout';
import { GalleryDetailsPage } from 'components/pages/gallery-details/galleryDetails';
import { serverSideTranslations } from 'utils/serverSideTranslations';

const GalleryDetails: NextPage = () => {
  const intl = useIntl();

  return (
    <DefaultLayout>
      <NextSeo title={intl.formatMessage({ id: 'details:tab.title', defaultMessage: 'Details' })} />
      <GalleryDetailsPage />
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

export default GalleryDetails;
