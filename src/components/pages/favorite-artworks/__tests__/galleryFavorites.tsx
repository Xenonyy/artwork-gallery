import { render, screen } from '@testing-library/react';

import { FavoriteArtworksPage } from 'components/pages/favorite-artworks/favoriteArtworks';
import { AllTheProviders } from 'test/allTheProviders';

describe('Favorite page', () => {
  test('display title', () => {
    render(<FavoriteArtworksPage />, { wrapper: AllTheProviders });

    expect(screen.getByTestId('title')).toHaveTextContent('Favorite Artworks');
  });
});
