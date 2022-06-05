import { render, screen } from '@testing-library/react';

import { GalleryDetailsPage } from 'components/pages/gallery-details/galleryDetails';
import { AllTheProviders } from 'test/allTheProviders';

describe('Details page', () => {
  test('display title', () => {
    render(<GalleryDetailsPage />, { wrapper: AllTheProviders });

    expect(screen.getByTestId('title')).toHaveTextContent('Artwork Details');
  });
});
