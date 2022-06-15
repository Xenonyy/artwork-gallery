import type { AxiosResponse } from 'axios';

import { QueryKeys } from 'enums/queryKeys';
import { ajax } from 'utils/ajax';

export const getArtworks = async (): Promise<AxiosResponse> => {
  return ajax.get(QueryKeys.ARTWORKS);
};
