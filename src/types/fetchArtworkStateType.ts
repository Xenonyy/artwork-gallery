import type { ArtworkResponseType } from 'types/artworkResponseType';
import type { PaginationType } from 'types/paginationType';
import type { PayloadStatusTypes } from 'types/payloadTypes';

export type FetchArtworkStateType = {
  data: ArtworkResponseType;
  status: PayloadStatusTypes;
  pagination: PaginationType;
} | null;
