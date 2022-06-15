import type { FC } from 'react';
import { memo } from 'react';

interface HeaderItemTypes {
  translation: string;
  href: string;
}

const HeaderItemComponent: FC<HeaderItemTypes> = ({ translation, href }) => {
  return (
    <a
      className="text-white text-sm mx-4 hover:text-secondary cursor-pointer hover:drop-shadow-sm duration-[400ms] transition-all"
      href={href}
    >
      {translation}
    </a>
  );
};

export const HeaderItem = memo(HeaderItemComponent);
