import type { AxiosResponse } from 'axios';

import { QueryKeys } from 'enums/queryKeys';
import { ajax } from 'utils/ajax';

export const getSpecificArtwork = async (id: string): Promise<AxiosResponse> => {
  return ajax.get(QueryKeys.SPECIFIC_ARTWORK + id);
};
