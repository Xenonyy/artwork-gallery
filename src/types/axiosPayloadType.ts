import type { PayloadStatusTypes } from 'types/payloadTypes';

export interface AxiosPayloadType {
  type: string;
  payload: {
    data: Record<string, unknown[]>;
    pagination: {
      current_page: number;
      limit: number;
      next_url: string;
      offset: number;
      total: number;
      total_pages: number;
    };
  };
  meta: { arg: string; requestId: string; requestStatus: PayloadStatusTypes };
}
