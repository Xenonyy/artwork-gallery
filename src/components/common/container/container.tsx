import clsx from 'clsx';
import type { FC } from 'react';

interface ContainerTypes {
  alignStart?: boolean;
  className?: string;
}

export const Container: FC<ContainerTypes> = ({ children, alignStart, className }) => {
  return (
    <section
      className={clsx(
        'my-20 flex py-10 px-20 flex-col justify-start w-full h-full min-h-[80vh]',
        className,
        {
          ['items-start']: alignStart,
          ['items-center']: !alignStart,
        },
      )}
    >
      {children}
    </section>
  );
};
