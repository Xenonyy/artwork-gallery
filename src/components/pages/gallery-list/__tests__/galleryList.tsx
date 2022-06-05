import { render, screen } from '@testing-library/react';

import { GalleryListPage } from 'components/pages/gallery-list/galleryList';
import { AllTheProviders } from 'test/allTheProviders';

describe('Gallery page', () => {
  test('display title', () => {
    render(<GalleryListPage />, { wrapper: AllTheProviders });

    expect(screen.getByTestId('title')).toHaveTextContent('Artwork List');
  });
});
