import type { PayloadStatusTypes } from 'types/payloadTypes';

export type FetchArtworkStateType = {
  data: string[];
  status: PayloadStatusTypes;
} | null;
