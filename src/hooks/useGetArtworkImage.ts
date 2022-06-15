import { useQuery } from 'react-query';

import { getArtworkImage } from 'api/getArtworkImage';
import { QueryKeys } from 'enums/queryKeys';

export const useGetArtworkImage = (id: string) => {
  const {
    data: artworkImageData,
    status: artworkImageStatus,
    refetch: fetchArtworkImageData,
  } = useQuery(
    QueryKeys.ARTWORK_IMAGE,
    async () => {
      const getData = await getArtworkImage(id);

      return getData;
    },
    { enabled: false },
  );

  return { artworkImageData, artworkImageStatus, fetchArtworkImageData };
};
