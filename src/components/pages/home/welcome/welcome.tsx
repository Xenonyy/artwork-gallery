import type { FC } from 'react';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import { AppVersion } from 'components/common/appVersion/appVersion';

import { messages } from './messages';

const WelcomeComponent: FC = () => {
  return (
    <div>
      <h1 data-testid="title">
        <FormattedMessage {...messages.title} />
      </h1>
      <AppVersion />
    </div>
  );
};

export const Welcome = memo(WelcomeComponent);
