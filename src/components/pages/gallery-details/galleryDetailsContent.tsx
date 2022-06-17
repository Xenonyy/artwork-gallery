import type { FC } from 'react';
import { useCallback, useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { messages } from 'components/pages/gallery-details/messages';
import { GalleryListItem } from 'components/pages/gallery-list/galleryListItem';
import { fetchSpecificArtworkAction } from 'redux/actions/fetchSpecificArtwork';
import type { AppDispatch, RootState } from 'redux/store';

const GalleryDetailsContentPageComponent: FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const artworkIdData = useSelector((state: RootState) => state.artworkId);
  const artworkData = useSelector((state: RootState) => state.artwork);

  useEffect(() => {
    void dispatch(
      fetchSpecificArtworkAction(
        localStorage.getItem('artwork ID')
          ? (localStorage.getItem('artwork ID') as string)
          : artworkIdData,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <div className="h-full w-full flex flex-row justify-center items-start">
      <GalleryListItem
        detailsPage
        alt={artworkData.data?.alt_titles ?? artworkData.data?.title}
        favorite={favoriteArtworks.includes(artworkData.data?.id)}
        src={artworkData.data?.image_id}
        onFavoriteClick={handleFavoriteClick(artworkData.data?.id)}
      />
      <div className="flex h-full w-full justify-start items-center flex-col">
        <p className="text-2xl mb-10">{messages.information.defaultMessage}</p>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.artwork_title.defaultMessage}</p>
          <p>{artworkData.data?.title}</p>
        </div>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.description.defaultMessage}</p>
          <p>{artworkData.data?.thumbnail?.alt_text}</p>
        </div>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.artist_title.defaultMessage}</p>
          <p>{artworkData.data?.artist_title}</p>
        </div>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.department.defaultMessage}</p>
          <p>{artworkData.data?.department_title}</p>
        </div>
      </div>
    </div>
  );
};

export const GalleryDetailsContentPage = memo(GalleryDetailsContentPageComponent);
