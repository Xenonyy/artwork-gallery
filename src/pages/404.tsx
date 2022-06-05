import type { NextPage } from 'next';

import CustomErrorPage from './_error';

const Custom404Page: NextPage = () => {
  return <CustomErrorPage statusCode={404} />;
};

export default Custom404Page;
