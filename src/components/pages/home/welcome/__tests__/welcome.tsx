import { render, screen } from '@testing-library/react';

import { Welcome } from 'components/pages/home/welcome/welcome';
import { AllTheProviders } from 'test/allTheProviders';

describe('Home page - Welcome', () => {
  test('display title', () => {
    render(<Welcome />, { wrapper: AllTheProviders });

    expect(screen.getByTestId('title')).toHaveTextContent('Hello');
  });
});
