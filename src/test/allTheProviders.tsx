import type { FC } from 'react';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import hu from 'locales/hu.json';

export const AllTheProviders: FC = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale="hu" messages={hu}>
        {children}
      </IntlProvider>
    </QueryClientProvider>
  );
};
