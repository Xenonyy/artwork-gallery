import type { FC } from 'react';
import { memo } from 'react';
import { useIntl } from 'react-intl';

import { AppVersion } from 'components/common/appVersion/appVersion';

const FooterComponent: FC = ({}) => {
  const intl = useIntl();

  return (
    <div className="h-20 flex text-white flex-row justify-between items-center py-2 px-20 w-full bg-secondary fixed bottom-0 z-10">
      <p>{intl.formatMessage({ id: 'common:footer.title', defaultMessage: 'Artwork Gallery' })}</p>
      <AppVersion />
    </div>
  );
};

export const Footer = memo(FooterComponent);
