import type { FC } from 'react';
import { memo } from 'react';

interface TitleComponentTypes {
  translation: string;
}

const TitleComponent: FC<TitleComponentTypes> = ({ translation }) => {
  return <span className="text-2xl my-5 font-semibold">{translation}</span>;
};

export const Title = memo(TitleComponent);
