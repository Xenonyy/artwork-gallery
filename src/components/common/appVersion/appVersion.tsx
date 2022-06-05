import type { FC } from 'react';
import { useMemo, memo } from 'react';
import { FormattedMessage } from 'react-intl';

import { messages } from './messages';

const AppVersionComponent: FC = () => {
  const versionValues = useMemo(
    () => ({
      value: process.env.NEXT_PUBLIC_APP_VERSION,
    }),
    [],
  );

  return (
    <span>
      <FormattedMessage {...messages.version} values={versionValues} />
    </span>
  );
};

export const AppVersion = memo(AppVersionComponent);
