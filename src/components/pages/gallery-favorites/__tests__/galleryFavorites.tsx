import { render, screen } from '@testing-library/react';

import { GalleryFavoritesPage } from 'components/pages/gallery-favorites/galleryFavorites';
import { AllTheProviders } from 'test/allTheProviders';

describe('Favorite page', () => {
  test('display title', () => {
    render(<GalleryFavoritesPage />, { wrapper: AllTheProviders });

    expect(screen.getByTestId('title')).toHaveTextContent('Favorite Artworks');
  });
});
