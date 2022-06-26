import clsx from 'clsx';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState, memo } from 'react';

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
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(document.querySelector('body')?.clientWidth ?? 0);
    }
  }, []);

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
        height={detailsPage ? windowWidth * 0.65 : windowWidth / 4}
        src={`${QueryKeys.ARTWORK_IMAGE + src}/full/843,/0/default.jpg`}
        width={detailsPage ? windowWidth * 0.65 : windowWidth / 4}
      />
      <span
        className={clsx(`my-2 text-white text-center w-[${windowWidth / 4}]`, {
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
