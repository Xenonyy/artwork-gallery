import type { FC } from 'react';
import { memo } from 'react';

interface PaginationTextItemTypes {
  text: number;
  translation: string;
}

const PaginationTextItemComponent: FC<PaginationTextItemTypes> = ({ text, translation }) => {
  return (
    <>
      {translation}
      <span className="font-bold text-primary mx-1">{text}</span>
    </>
  );
};

export const PaginationTextItem = memo(PaginationTextItemComponent);
