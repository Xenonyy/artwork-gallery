import { combineReducers } from 'redux';

import { artworksReducer } from 'redux/reducers/artworksReducer';
import { searchArtworksReducer } from 'redux/reducers/searchArtworksReducer';
import { setArtworkIdReducer } from 'redux/reducers/setArtworkIdReducer';
import { setArtworkLimitReducer } from 'redux/reducers/setArtworkLimitReducer';
import { setSearchDataReducer } from 'redux/reducers/setSearchDataReducer';
import { setSearchDataResultsReducer } from 'redux/reducers/setSearchDataResultsReducer';
import { specificArtworkReducer } from 'redux/reducers/specificArtworkReducer';

const rootReducer = combineReducers({
  artworks: artworksReducer,
  artwork: specificArtworkReducer,
  artworkId: setArtworkIdReducer,
  artworkLimit: setArtworkLimitReducer,
  searchArtwork: searchArtworksReducer,
  searchData: setSearchDataReducer,
  searchDataResults: setSearchDataResultsReducer,
});

export default rootReducer;
