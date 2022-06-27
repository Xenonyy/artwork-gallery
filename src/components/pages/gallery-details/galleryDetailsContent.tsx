import type { FC } from 'react';
import { useCallback, useState, useEffect, memo } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { StatusMessage } from 'components/common/statusMessage/statusMessage';
import { GalleryDetailsItem } from 'components/pages/gallery-details/galleryDetailsItem';
import { messages } from 'components/pages/gallery-details/messages';
import { GalleryListItem } from 'components/pages/gallery-list/galleryListItem';
import { fetchSpecificArtworkAction } from 'redux/actions/fetchSpecificArtwork';
import type { AppDispatch, RootState } from 'redux/store';
import type { SpecificArtworkResponseType } from 'types/specificArtworkResponseType';

const GalleryDetailsContentPageComponent: FC = ({}) => {
  const intl = useIntl();
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
        <GalleryDetailsItem data={artworkData.title} title={messages.artist_title.defaultMessage} />
        <GalleryDetailsItem
          data={artworkData.thumbnail?.alt_text}
          title={messages.description.defaultMessage}
        />
        <GalleryDetailsItem
          data={artworkData.artist_title}
          title={messages.artist_title.defaultMessage}
        />
        <GalleryDetailsItem
          data={artworkData.department_title}
          title={messages.department.defaultMessage}
        />
      </div>
    </div>
  ) : artworkStatus === 'pending' ? (
    <StatusMessage
      translation={intl.formatMessage({
        defaultMessage: 'Loading...',
        id: 'common:loading',
      })}
    />
  ) : artworkStatus === 'rejected' ? (
    <StatusMessage
      translation={intl.formatMessage({
        defaultMessage: 'Error',
        id: 'common:error',
      })}
    />
  ) : (
    <StatusMessage
      translation={intl.formatMessage({
        defaultMessage: 'No results',
        id: 'common:no-results',
      })}
    />
  );
};

export const GalleryDetailsContentPage = memo(GalleryDetailsContentPageComponent);
