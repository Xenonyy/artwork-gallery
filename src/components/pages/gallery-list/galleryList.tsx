import type { FC } from 'react';
import { memo } from 'react';
import { useIntl } from 'react-intl';

import { Container } from 'components/common/container/container';
import { Title } from 'components/common/title/title';
import { GalleryListContentPage } from 'components/pages/gallery-list/galleryListContent';

import { messages } from './messages';

const GalleryListPageComponent: FC = ({}) => {
  const intl = useIntl();

  return (
    <Container>
      <Title translation={intl.formatMessage(messages.title)} />
      <GalleryListContentPage />
    </Container>
  );
};

export const GalleryListPage = memo(GalleryListPageComponent);
