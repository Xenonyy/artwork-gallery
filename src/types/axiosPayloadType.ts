import type { ArtworkResponseType } from 'types/artworkResponseType';
import type { PaginationType } from 'types/paginationType';
import type { PayloadStatusTypes } from 'types/payloadTypes';
import type { SpecificArtworkResponseType } from 'types/specificArtworkResponseType';

export interface AxiosPayloadType {
  type: string;
  payload: {
    data: ArtworkResponseType | SpecificArtworkResponseType;
    pagination: PaginationType;
  };
  meta: { arg: string; requestId: string; requestStatus: PayloadStatusTypes };
}
