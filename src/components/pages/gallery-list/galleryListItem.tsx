import clsx from 'clsx';
import Image from 'next/image';
import type { FC } from 'react';
import { memo } from 'react';

import { FavoriteIcon } from 'assets/favorite';
import { FilledFavoriteIcon } from 'assets/favorite-filled';
import { QueryKeys } from 'enums/queryKeys';

interface GalleryListItemTypes {
  title?: string;
  src: string;
  alt: string;
  onClick?(): void;
  onFavoriteClick(): void;
  detailsPage?: boolean;
  favorite: boolean;
}

const GalleryListItemComponent: FC<GalleryListItemTypes> = ({
  src,
  title,
  alt,
  onClick,
  detailsPage = false,
  onFavoriteClick,
  favorite,
}) => {
  return (
    // TODO: CSS FOR MOBILE
    <div
      aria-hidden
      className={clsx(
        'w-auto h-auto flex justify-center items-center flex-col relative cursor-default',
        {
          ['mx-4 my-10']: !detailsPage,
        },
      )}
      role={'button'}
      tabIndex={0}
      onClick={onClick}
    >
      <button className="absolute right-4 top-4 z-10" type="button" onClick={onFavoriteClick}>
        {favorite ? (
          <FilledFavoriteIcon className="text-primary" />
        ) : (
          <FavoriteIcon className="text-primary" />
        )}
      </button>
      <Image
        priority
        alt={alt}
        className={!detailsPage ? 'hover:scale-110 transition-all duration-500' : ''}
        height={detailsPage ? 1200 : 500}
        src={`${QueryKeys.ARTWORK_IMAGE + src}/full/843,/0/default.jpg`}
        width={detailsPage ? 1200 : 500}
      />
      <span
        className={clsx('my-2 text-white text-center w-[500px]', {
          ['text-xs']: title ? title.length >= 15 : false,
          ['text-sm']: title ? title.length < 15 : false,
          ['text-base']: detailsPage,
        })}
      >
        {title}
      </span>
    </div>
  );
};

export const GalleryListItem = memo(GalleryListItemComponent);
