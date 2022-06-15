import type { AxiosResponse } from 'axios';

import { QueryKeys } from 'enums/queryKeys';
import { ajax } from 'utils/ajax';

export const getArtworkImage = async (id: string): Promise<AxiosResponse> => {
  return ajax.get(`${QueryKeys.ARTWORK_IMAGE + id}/full/843,/0/default.jpg`);
};
