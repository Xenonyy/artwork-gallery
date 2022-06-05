import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useIntl } from 'react-intl';

import { DefaultLayout } from 'components/layouts/defaultLayout';
import { GalleryFavoritesPage } from 'components/pages/gallery-favorites/galleryFavorites';
import { serverSideTranslations } from 'utils/serverSideTranslations';

const GalleryFavorites: NextPage = () => {
  const intl = useIntl();

  return (
    <DefaultLayout>
      <NextSeo
        title={intl.formatMessage({ id: 'favorites:tab.title', defaultMessage: 'Favorites' })}
      />
      <GalleryFavoritesPage />
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

export default GalleryFavorites;
