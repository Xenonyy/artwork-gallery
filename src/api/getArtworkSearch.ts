import type { AxiosResponse } from 'axios';

import { QueryKeys } from 'enums/queryKeys';
import { ajax } from 'utils/ajax';

export const getArtworkSearch = async (search: string): Promise<AxiosResponse> => {
  return ajax.get(`${QueryKeys.ARTWORKS}/search?q=${search}`);
};
