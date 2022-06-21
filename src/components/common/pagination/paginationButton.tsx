import type { FC } from 'react';
import { memo } from 'react';

import { DropdownIcon } from 'assets/dropdown';

interface PaginationButtonTypes {
  start?: boolean;
  handleClick(): void;
}

const PaginationButtonComponent: FC<PaginationButtonTypes> = ({ start = false, handleClick }) => {
  return (
    <button
      className={`inline-flex relative items-center py-2 px-2 bg-primary/90 hover:bg-primary/70 border border-gray-300
      ${start ? 'rounded-l-md' : 'rounded-r-md'} "`}
      type="button"
      onClick={handleClick}
    >
      <DropdownIcon className={`w-3 h-3 text-white ${start ? 'rotate-90' : '-rotate-90'}`} />
    </button>
  );
};

export const PaginationButton = memo(PaginationButtonComponent);
