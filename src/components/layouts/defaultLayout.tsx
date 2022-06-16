import type { FC } from 'react';

import { Footer } from 'components/common/footer/footer';
import { Header } from 'components/common/header/header';

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-start w-full h-full bg-black bg-opacity-20">
        {children}
      </main>
      <Footer />
    </>
  );
};
