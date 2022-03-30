import React from 'react';
import { render, screen } from '@testing-library/react';

import ErrorMessage from '../../components/common/ErrorMessage';

describe('ErrorMessage', () => {
  it('should render without crashing', async () => {
    const error = new Error('Error');

    render(<ErrorMessage>{error.message}</ErrorMessage>);

    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
