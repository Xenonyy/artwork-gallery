import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useState, useCallback, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { ListboxMenu } from 'components/common/dropdown/listboxMenu';
import { Pagination } from 'components/common/pagination/pagination';
import { SearchBar } from 'components/common/searchbar/searchbar';
import { GalleryListItem } from 'components/pages/gallery-list/galleryListItem';
import { fetchArtworksAction } from 'redux/actions/fetchArtworks';
import { fetchArtworkSearchAction } from 'redux/actions/fetchArtworkSearch';
import { fetchSpecificArtworkAction } from 'redux/actions/fetchSpecificArtwork';
import { setArtworkIdAction } from 'redux/actions/setArtworkId';
import { setSearchDataResultsAction } from 'redux/actions/setSearchDataResults';
import type { AppDispatch, RootState } from 'redux/store';
import type { ArtworkResponseType } from 'types/artworkResponseType';
import type { AxiosPayloadType } from 'types/axiosPayloadType';
import type { SearchedArtworkType } from 'types/searchedArtworkType';
import { webPaths } from 'webPaths';

const GalleryListContentPageComponent: FC = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const reduxStore = useSelector((state: RootState) => state);
  const { pagination, data, status } = reduxStore.artworks
    ? reduxStore.artworks
    : { pagination: null, data: null, status: null };

  useEffect(() => {
    void dispatch(
      fetchArtworksAction({
        limit: reduxStore.artworkLimit,
        page: String(pagination?.current_page ?? 1),
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduxStore.artworkLimit]);

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
          limit: reduxStore.artworkLimit,
          page: String(i),
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reduxStore.artworkLimit],
  );

  // TOOD: search next page
  const handleSearchPageClick = useCallback(
    (i: number) => {
      void dispatch(
        fetchArtworksAction({
          limit: reduxStore.artworkLimit,
          page: String(i),
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reduxStore.artworkLimit],
  );

  const [searchedArtworkData, setSearchedArtworkData] = useState<SearchedArtworkType[] | []>([]);
  const [searchedArtworksStatus, setSearchedArtworksStatus] = useState<string>();

  const handleSearchClick = useCallback(() => {
    void dispatch(fetchArtworkSearchAction(reduxStore.searchData)).then(search => {
      const searchResponse = (search as AxiosPayloadType).payload.data;

      (searchResponse as SearchedArtworkType).map(async artwork => {
        await dispatch(fetchSpecificArtworkAction(String(artwork.id)))
          .then(data => {
            //TODO: fix type
            searchedArtworkData.push((data as AxiosPayloadType).payload.data as never);
            //TODO: check api for limit modification, default limit is 10
            if (searchedArtworkData.length >= 10) {
              setSearchedArtworksStatus(data.meta.requestStatus);
              void dispatch(setSearchDataResultsAction(searchedArtworkData));
            }
          })
          .catch(() => {
            setSearchedArtworksStatus('rejected');
          })
          .then(() => {
            setSearchedArtworkData([]);
          });
      });
    });
  }, [dispatch, reduxStore.searchData, searchedArtworkData]);

  return (
    <section className="w-[90vw] min-h-screen bg-secondary bg-opacity-70 flex justify-center items-center flex-row flex-wrap px-5 mt-4 py-8 rounded-3xl">
      {status === 'fulfilled' || searchedArtworksStatus === 'fulfilled' ? (
        <>
          <div className="flex flex-col lg:flex-row w-full h-auto justify-evenly items-center">
            <SearchBar onClick={handleSearchClick} />
            <Pagination
              pageCurrent={
                reduxStore.searchArtwork?.pagination?.current_page ?? pagination?.current_page ?? 1
              }
              pageSet={reduxStore.searchArtwork ? handleSearchPageClick : handlePageClick}
              pageTotal={
                reduxStore.searchArtwork?.pagination?.total_pages ?? pagination?.total_pages ?? 1
              }
              resultFrom={
                (reduxStore.searchArtwork?.pagination?.offset ?? pagination?.offset ?? 1) + 1
              }
              resultTo={
                (reduxStore.searchArtwork?.pagination?.limit ?? pagination?.limit ?? 25) *
                (reduxStore.searchArtwork?.pagination?.current_page ??
                  pagination?.current_page ??
                  1)
              }
              resultTotal={reduxStore.searchArtwork?.pagination?.total ?? pagination?.total ?? 1}
            />
            <ListboxMenu />
          </div>
          {reduxStore.searchDataResults.length > 0 && searchedArtworksStatus === 'fulfilled'
            ? (reduxStore.searchDataResults as ArtworkResponseType).map(artwork => {
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
              })
            : (data as ArtworkResponseType).map(artwork => {
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
              pageCurrent={
                reduxStore.searchArtwork?.pagination?.current_page ?? pagination?.current_page ?? 1
              }
              pageSet={reduxStore.searchArtwork ? handleSearchPageClick : handlePageClick}
              pageTotal={
                reduxStore.searchArtwork?.pagination?.total_pages ?? pagination?.total_pages ?? 1
              }
              resultFrom={
                (reduxStore.searchArtwork?.pagination?.offset ?? pagination?.offset ?? 1) + 1
              }
              resultTo={
                (reduxStore.searchArtwork?.pagination?.limit ?? pagination?.limit ?? 25) *
                (reduxStore.searchArtwork?.pagination?.current_page ??
                  pagination?.current_page ??
                  1)
              }
              resultTotal={reduxStore.searchArtwork?.pagination?.total ?? pagination?.total ?? 1}
            />
          </div>
        </>
      ) : status === 'pending' || searchedArtworksStatus === 'pending' ? (
        <p className="text-6xl text-white font-bold">
          <FormattedMessage defaultMessage="Loading..." id="common:loading" />
        </p>
      ) : status === 'rejected' || searchedArtworksStatus === 'rejected' ? (
        <FormattedMessage defaultMessage="No results" id="common:no-results" />
      ) : (
        <FormattedMessage defaultMessage="Error" id="common:error" />
      )}
    </section>
  );
};

export const GalleryListContentPage = memo(GalleryListContentPageComponent);
