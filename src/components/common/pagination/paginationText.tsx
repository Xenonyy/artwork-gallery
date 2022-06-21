import type { FC } from 'react';
import { memo } from 'react';
import { useIntl } from 'react-intl';

import { PaginationTextItem } from 'components/common/pagination/paginationTextItem';

interface PaginationTextTypes {
  resultFrom: number;
  resultTo: number;
  resultTotal: number;
}

const PaginationTextComponent: FC<PaginationTextTypes> = ({
  resultFrom,
  resultTo,
  resultTotal,
}) => {
  const intl = useIntl();

  return (
    <div className="flex flex-row justify-center items-center">
      <PaginationTextItem
        text={resultFrom}
        translation={intl.formatMessage({
          defaultMessage: 'From',
          id: 'common:pagination.from',
        })}
      />
      <PaginationTextItem
        text={resultTo}
        translation={intl.formatMessage({
          defaultMessage: 'To',
          id: 'common:pagination.to',
        })}
      />
      <PaginationTextItem
        text={resultTotal}
        translation={intl.formatMessage({
          defaultMessage: 'Of',
          id: 'common:pagination.of',
        })}
      />
      {intl.formatMessage({
        defaultMessage: 'Total Results',
        id: 'common:pagination.results',
      })}
    </div>
  );
};

export const PaginationText = memo(PaginationTextComponent);
