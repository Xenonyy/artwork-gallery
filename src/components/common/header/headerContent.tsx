import type { FC } from 'react';
import { memo } from 'react';
import { useIntl } from 'react-intl';

import { HeaderItem } from 'components/common/header/headerItem';
import { webPaths } from 'webPaths';

const HeaderContentComponent: FC = ({}) => {
  const intl = useIntl();

  return (
    <div className="flex justify-end w-full h-full items-center flex-row">
      <HeaderItem
        href={webPaths.home}
        translation={intl.formatMessage({
          id: 'common:header.list',
          defaultMessage: 'Artwork List',
        })}
      />
      <HeaderItem
        href={webPaths.favorites}
        translation={intl.formatMessage({
          id: 'common:header.favorites',
          defaultMessage: 'Favorite Artworks',
        })}
      />
    </div>
  );
};

export const HeaderContent = memo(HeaderContentComponent);
