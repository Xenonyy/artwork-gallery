import type { NextPage } from 'next';

import CustomErrorPage from './_error';

const Custom500Page: NextPage = () => {
  return <CustomErrorPage statusCode={500} />;
};

export default Custom500Page;
