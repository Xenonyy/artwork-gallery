import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useState, useCallback, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { ListboxMenu } from 'components/common/dropdown/listboxMenu';
import { Pagination } from 'components/common/pagination/pagination';
import { GalleryListItem } from 'components/pages/gallery-list/galleryListItem';
import { fetchArtworksAction } from 'redux/actions/fetchArtworks';
import { setArtworkIdAction } from 'redux/actions/setArtworkId';
import type { AppDispatch, RootState } from 'redux/store';
import type { ArtworkResponseType } from 'types/artworkResponseType';
import { webPaths } from 'webPaths';

const GalleryListContentPageComponent: FC = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const artworkLimitData = useSelector((state: RootState) => state.artworkLimit);
  const artworkData = useSelector((state: RootState) => state.artworks);
  const { pagination, data, status } = artworkData
    ? artworkData
    : { pagination: null, data: null, status: null };

  useEffect(() => {
    void dispatch(
      fetchArtworksAction({ limit: artworkLimitData, page: String(pagination?.current_page ?? 1) }),
    );
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

  const handlePageClick = useCallback(
    (i: number) => {
      void dispatch(
        fetchArtworksAction({
          limit: artworkLimitData,
          page: String(i),
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [artworkLimitData],
  );

  return (
    <section className="w-[90vw] min-h-screen bg-secondary bg-opacity-70 flex justify-center items-center flex-row flex-wrap px-5 mt-4 py-8 rounded-3xl">
      {status === 'fulfilled' ? (
        <>
          <div className="flex flex-row w-full h-auto justify-evenly items-center">
            <Pagination
              pageCurrent={pagination?.current_page ?? 1}
              pageSet={handlePageClick}
              pageTotal={pagination?.total_pages ?? 1}
              resultFrom={(pagination?.offset ?? 1) + 1}
              resultTo={(pagination?.limit ?? 25) * (pagination?.current_page ?? 1)}
              resultTotal={pagination?.total ?? 1}
            />
            <ListboxMenu />
          </div>
          {(data as ArtworkResponseType).map(artwork => {
            return (
              <GalleryListItem
                key={artwork.id}
                alt={artwork.alt_titles ?? artwork.title}
                favorite={favoriteArtworks.includes(artwork.id)}
                src={artwork.image_id}
                title={artwork.title}
                onClick={handleArtworkClick(artwork.id)}
                onFavoriteClick={handleFavoriteClick(artwork.id)}
              />
            );
          })}
          <div className="flex flex-row w-full h-30 justify-evenly items-center">
            <Pagination
              pageCurrent={pagination?.current_page ?? 1}
              pageSet={handlePageClick}
              pageTotal={pagination?.total_pages ?? 1}
              resultFrom={(pagination?.offset ?? 1) + 1}
              resultTo={(pagination?.limit ?? 25) * (pagination?.current_page ?? 1)}
              resultTotal={pagination?.total ?? 1}
            />
          </div>
        </>
      ) : status === 'pending' ? (
        <p className="text-6xl text-white font-bold">
          <FormattedMessage defaultMessage="Loading..." id="common:loading" />
        </p>
      ) : (
        <FormattedMessage defaultMessage="Error" id="common:error" />
      )}
    </section>
  );
};

export const GalleryListContentPage = memo(GalleryListContentPageComponent);
