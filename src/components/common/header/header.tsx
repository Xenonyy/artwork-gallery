import type { FC } from 'react';
import { memo } from 'react';
import { useIntl } from 'react-intl';

import { HeaderContent } from 'components/common/header/headerContent';

const HeaderComponent: FC = ({}) => {
  const intl = useIntl();

  return (
    <div className="h-20 flex flex-row justify-start items-center py-2 px-20 w-full bg-primary fixed z-40">
      <p className="text-black text-opacity-60 mr-20 w-full font-bold text-md">
        {intl.formatMessage({ id: 'common:header.title', defaultMessage: 'Artwork Gallery' })}
      </p>
      <HeaderContent />
    </div>
  );
};

export const Header = memo(HeaderComponent);
