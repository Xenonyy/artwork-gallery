import type { FC } from 'react';
import { memo } from 'react';
import { useIntl } from 'react-intl';

import { Container } from 'components/common/container/container';
import { Title } from 'components/common/title/title';
import { GalleryDetailsContentPage } from 'components/pages/gallery-details/galleryDetailsContent';

import { messages } from './messages';

const GalleryDetailsPageComponent: FC = () => {
  const intl = useIntl();

  return (
    <Container alignStart className="h-[80vh] items-start">
      <Title translation={intl.formatMessage(messages.title)} />
      <GalleryDetailsContentPage />
    </Container>
  );
};

export const GalleryDetailsPage = memo(GalleryDetailsPageComponent);
