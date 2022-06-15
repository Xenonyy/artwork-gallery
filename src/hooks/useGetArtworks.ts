import { useQuery } from 'react-query';

import { getArtworks } from 'api/getArtworks';
import { QueryKeys } from 'enums/queryKeys';

export const useGetArtworks = () => {
  const { data: artworkData, status: artworkStatus } = useQuery(QueryKeys.ARTWORKS, async () => {
    const getData = await getArtworks();

    return getData;
  });

  return { artworkData, artworkStatus };
};
