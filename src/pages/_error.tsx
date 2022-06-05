import type { NextPage } from 'next';
import Error from 'next/error';

interface CustomErrorProps {
  statusCode: number;
}

const CustomError: NextPage<CustomErrorProps> = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};

CustomError.getInitialProps = ({ res, err }): CustomErrorProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;

  return {
    statusCode,
  };
};

export default CustomError;
