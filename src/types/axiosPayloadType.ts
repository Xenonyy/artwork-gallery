import type { PayloadStatusTypes } from 'types/payloadTypes';

export interface AxiosPayloadType {
  type: string;
  payload: { data: Record<string, unknown[]>; pagination: Record<string, unknown[]> };
  meta: { arg: string; requestId: string; requestStatus: PayloadStatusTypes };
}
