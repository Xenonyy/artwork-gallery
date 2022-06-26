import type { ArtworkResponseType } from 'types/artworkResponseType';
import type { PaginationType } from 'types/paginationType';
import type { PayloadStatusTypes } from 'types/payloadTypes';
import type { SearchedArtworkType } from 'types/searchedArtworkType';

export type FetchArtworkStateType = {
  data: ArtworkResponseType | SearchedArtworkType[];
  status: PayloadStatusTypes;
  pagination: PaginationType;
} | null;
