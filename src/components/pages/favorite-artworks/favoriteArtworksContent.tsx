import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useCallback, useEffect, useState, memo } from 'react';
import { useDispatch } from 'react-redux';

import { messages } from 'components/pages/favorite-artworks/messages';
import { GalleryListItem } from 'components/pages/gallery-list/galleryListItem';
import { fetchSpecificArtworkAction } from 'redux/actions/fetchSpecificArtwork';
import { setArtworkIdAction } from 'redux/actions/setArtworkId';
import type { AppDispatch } from 'redux/store';
import { webPaths } from 'webPaths';

const FavoriteArtworksContentComponent: FC = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [favoriteArtworksData] = useState<unknown[]>([]);
  const [favoriteArtworksStatus, setFavoriteArtworksStatus] = useState<string>();

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

  useEffect(() => {
    favoriteArtworks.map(async (e: number) => {
      await dispatch(fetchSpecificArtworkAction(String(e))).then(data => {
        // fix type in reducer
        favoriteArtworksData.push(data.payload?.data);
        if (favoriteArtworksData.length === favoriteArtworks.length) {
          setFavoriteArtworksStatus(data.meta.requestStatus);
        }
      });
    });
  }, [dispatch, favoriteArtworks, favoriteArtworksData]);

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

  const handleArtworkClick = useCallback(
    (id: number) => () => {
      localStorage.setItem('artwork ID', JSON.stringify(id));
      void dispatch(setArtworkIdAction(String(id)));
      void router.push(webPaths.details);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return favoriteArtworksStatus === 'fulfilled' ? (
    <section className="w-full h-full bg-secondary bg-opacity-70 flex justify-center items-center flex-row flex-wrap px-5 py-8 rounded-3xl">
      {favoriteArtworksData.length === favoriteArtworks.length &&
        favoriteArtworksData
          .map((e: { id: number; alt_titles: string | null; title: string; image_id: string }) => {
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
          })
          .sort((a, b) => {
            return a.key !== null && b.key !== null ? (a.key < b.key ? -1 : 1) : 1;
          })}
    </section>
  ) : (
    <section className="w-full h-full bg-secondary bg-opacity-70 flex justify-center items-center flex-row flex-wrap px-5 py-8 rounded-3xl">
      {messages.loading.defaultMessage}
    </section>
  );
};

export const FavoriteArtworksContent = memo(FavoriteArtworksContentComponent);
