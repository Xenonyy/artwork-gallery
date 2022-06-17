import type { AxiosResponse } from 'axios';

import { QueryKeys } from 'enums/queryKeys';
import { ajax } from 'utils/ajax';

export const getArtworks = async (limit: string): Promise<AxiosResponse> => {
  return ajax.get(`${QueryKeys.ARTWORKS}?limit=${limit}`);
};
