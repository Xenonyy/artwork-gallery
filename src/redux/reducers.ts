import { combineReducers } from 'redux';

import { artworksReducer } from 'redux/reducers/artworksReducer';
import { searchArtworksReducer } from 'redux/reducers/searchArtworksReducer';
import { setArtworkIdReducer } from 'redux/reducers/setArtworkIdReducer';
import { setArtworkLimitReducer } from 'redux/reducers/setArtworkLimitReducer';
import { specificArtworkReducer } from 'redux/reducers/specificArtworkReducer';

const rootReducer = combineReducers({
  artworks: artworksReducer,
  artwork: specificArtworkReducer,
  artworkId: setArtworkIdReducer,
  artworkLimit: setArtworkLimitReducer,
  searchArtwork: searchArtworksReducer,
});

export default rootReducer;
