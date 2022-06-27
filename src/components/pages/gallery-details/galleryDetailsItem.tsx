import type { FC } from 'react';
import { memo } from 'react';

interface GalleryDetailsItemTypes {
  title: string;
  data: string | undefined;
}
const GalleryDetailsItemComponent: FC<GalleryDetailsItemTypes> = ({ title, data }) => {
  return data ? (
    <div className="flex h-auto w-full justify-center items-start text-center flex-row p-2">
      <p className="mx-2 text-secondary w-1/3">{title}</p>
      <p className="text-left w-2/3">{data}</p>
    </div>
  ) : null;
};

export const GalleryDetailsItem = memo(GalleryDetailsItemComponent);
