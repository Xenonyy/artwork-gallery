import { useQuery } from 'react-query';

import { getArtworks } from 'api/getArtworks';
import { QueryKeys } from 'enums/queryKeys';

export const useGetArtworks = (limit?: string, page?: string) => {
  const { data: artworkData, status: artworkStatus } = useQuery(QueryKeys.ARTWORKS, async () => {
    const getData = await getArtworks(limit ? limit : '25', page ? page : '1');

    return getData;
  });

  return { artworkData, artworkStatus };
};
