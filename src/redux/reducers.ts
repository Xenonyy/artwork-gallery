import { combineReducers } from 'redux';

import { artworksReducer } from 'redux/reducers/artworksReducer';
import { setArtworkIdReducer } from 'redux/reducers/setArtworkIdReducer';
import { specificArtworkReducer } from 'redux/reducers/specificArtworkReducer';

const rootReducer = combineReducers({
  artworks: artworksReducer,
  artwork: specificArtworkReducer,
  artworkId: setArtworkIdReducer,
});

export default rootReducer;
