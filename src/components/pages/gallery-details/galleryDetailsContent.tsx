import type { FC } from 'react';
import { useCallback, useState, useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { messages } from 'components/pages/gallery-details/messages';
import { GalleryListItem } from 'components/pages/gallery-list/galleryListItem';
import { fetchSpecificArtworkAction } from 'redux/actions/fetchSpecificArtwork';
import type { AppDispatch, RootState } from 'redux/store';
import type { SpecificArtworkResponseType } from 'types/specificArtworkResponseType';

const GalleryDetailsContentPageComponent: FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const artworkIdData = useSelector((state: RootState) => state.artworkId);
  const artworkData = useSelector(
    (state: RootState) => state.artwork?.data as SpecificArtworkResponseType,
  );
  const artworkStatus = useSelector((state: RootState) => state.artwork?.status);

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

  return artworkStatus === 'fulfilled' ? (
    <div className="h-full w-full flex flex-row justify-center items-start">
      <GalleryListItem
        detailsPage
        alt={artworkData.alt_titles ?? artworkData.title}
        favorite={favoriteArtworks.includes(artworkData.id)}
        src={artworkData.image_id}
        onFavoriteClick={handleFavoriteClick(artworkData.id)}
      />
      <div className="flex h-full w-full justify-start items-center flex-col">
        <p className="text-2xl mb-10">{messages.information.defaultMessage}</p>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.artwork_title.defaultMessage}</p>
          <p>{artworkData.title}</p>
        </div>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.description.defaultMessage}</p>
          <p>{artworkData.thumbnail.alt_text}</p>
        </div>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.artist_title.defaultMessage}</p>
          <p>{artworkData.artist_title}</p>
        </div>
        <div className="flex h-auto w-auto justify-center items-start flex-row p-2">
          <p className="mx-2 text-secondary">{messages.department.defaultMessage}</p>
          <p>{artworkData.department_title}</p>
        </div>
      </div>
    </div>
  ) : artworkStatus === 'pending' ? (
    <section className="min-w-[30em] min-h-[15em] text-white text-2xl font-bold bg-secondary bg-opacity-70 flex justify-center items-center flex-row px-5 py-8 rounded-3xl">
      <FormattedMessage defaultMessage="Loading..." id="common:loading" />
    </section>
  ) : (
    <section className="min-w-[30em] min-h-[15em] text-white text-2xl font-bold bg-secondary bg-opacity-70 flex justify-center items-center px-5 py-8 rounded-3xl">
      <FormattedMessage defaultMessage="Error" id="common:error" />
    </section>
  );
};

export const GalleryDetailsContentPage = memo(GalleryDetailsContentPageComponent);
