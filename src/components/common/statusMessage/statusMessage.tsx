import type { FC } from 'react';

interface StatusMessageTypes {
  translation: string;
}
export const StatusMessage: FC<StatusMessageTypes> = ({ translation }) => {
  return (
    <section className="min-w-[30em] min-h-[15em] text-white text-2xl font-bold bg-secondary bg-opacity-70 flex justify-center items-center px-5 py-8 rounded-3xl">
      {translation}
    </section>
  );
};
