import { useQuery } from 'react-query';

import { getSpecificArtwork } from 'api/getSpecificArtwork';
import { QueryKeys } from 'enums/queryKeys';

export const useGetSpecificArtwork = (id: string) => {
  const {
    data: specificArtworkData,
    status: specificArtworkStatus,
    refetch: fetchSpecificArtwork,
  } = useQuery(
    QueryKeys.SPECIFIC_ARTWORK + id,
    async () => {
      const getData = await getSpecificArtwork(id);

      return getData;
    },
    {
      enabled: false,
    },
  );

  return { specificArtworkData, specificArtworkStatus, fetchSpecificArtwork };
};
