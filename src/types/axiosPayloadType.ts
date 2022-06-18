import type { ArtworkResponseType } from 'types/artworkResponseType';
import type { PaginationType } from 'types/paginationType';
import type { PayloadStatusTypes } from 'types/payloadTypes';

export interface AxiosPayloadType {
  type: string;
  payload: {
    data: ArtworkResponseType;
    pagination: PaginationType;
  };
  meta: { arg: string; requestId: string; requestStatus: PayloadStatusTypes };
}
