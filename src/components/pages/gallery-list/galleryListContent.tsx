/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useState, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListboxMenu } from 'components/common/dropdown/listboxMenu';
import { GalleryListItem } from 'components/pages/gallery-list/galleryListItem';
import { messages } from 'components/pages/gallery-list/messages';
import { fetchArtworksAction } from 'redux/actions/fetchArtworks';
import { setArtworkIdAction } from 'redux/actions/setArtworkId';
import type { AppDispatch, RootState } from 'redux/store';
import { webPaths } from 'webPaths';

const GalleryListContentPageComponent: FC = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const artworkData = useSelector((state: RootState) => state.artworks);
  const artworkLimitData = useSelector((state: RootState) => state.artworkLimit);

  useEffect(() => {
    void dispatch(fetchArtworksAction(artworkLimitData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artworkLimitData]);

  const handleArtworkClick = useCallback(
    (id: number) => () => {
      localStorage.setItem('artwork ID', JSON.stringify(id));
      void dispatch(setArtworkIdAction(String(id)));
      void router.push(webPaths.details);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [favoriteArtworks, setFavoriteArtworks] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem('Favorite Artworks')
        ? JSON.parse(localStorage.getItem('Favorite Artworks') as string)
        : [];
    }

    return [];
  });

  useEffect(() => {
    setFavoriteArtworks(
      localStorage.getItem('Favorite Artworks')
        ? [...new Set(JSON.parse(localStorage.getItem('Favorite Artworks') as string) as number[])]
        : [],
    );
  }, []);

  const handleFavoriteClick = useCallback(
    (id: number) => () => {
      if (favoriteArtworks.includes(id)) {
        localStorage.setItem(
          'Favorite Artworks',
          JSON.stringify(favoriteArtworks.filter(e => e !== id)),
        );
      } else {
        setFavoriteArtworks([favoriteArtworks.push(id)]);
        localStorage.setItem('Favorite Artworks', JSON.stringify([...new Set(favoriteArtworks)]));
      }
    },
    [favoriteArtworks],
  );

  return artworkData.data?.length > 0 ? (
    <section className="w-full h-full bg-secondary bg-opacity-70 flex justify-center items-center flex-row flex-wrap px-5 py-8 rounded-3xl">
      <ListboxMenu />
      {artworkData.data?.map(
        (e: { id: number; alt_titles: string | null; title: string; image_id: string }) => {
          return (
            <GalleryListItem
              key={e.id}
              alt={e.alt_titles ?? e.title}
              favorite={favoriteArtworks.includes(e.id)}
              src={e.image_id}
              title={e.title}
              onClick={handleArtworkClick(e.id)}
              onFavoriteClick={handleFavoriteClick(e.id)}
            />
          );
        },
      )}
    </section>
  ) : (
    <section className="w-full h-full bg-secondary bg-opacity-70 flex justify-center items-center flex-row flex-wrap px-5 py-8 rounded-3xl">
      {messages.loading.defaultMessage}
    </section>
  );
};

export const GalleryListContentPage = memo(GalleryListContentPageComponent);
