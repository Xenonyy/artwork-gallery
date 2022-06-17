import type { FC } from 'react';
import { memo } from 'react';
import { useIntl } from 'react-intl';

import { Container } from 'components/common/container/container';
import { Title } from 'components/common/title/title';
import { FavoriteArtworksContent } from 'components/pages/favorite-artworks/favoriteArtworksContent';

import { messages } from './messages';

const FavoriteArtworksPageComponent: FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <Title translation={intl.formatMessage(messages.title)} />
      <FavoriteArtworksContent />
    </Container>
  );
};

export const FavoriteArtworksPage = memo(FavoriteArtworksPageComponent);
