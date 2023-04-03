import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components.js/Header';

describe('Header', () => {
  it('renders header correctly', () => {
    const { getByText, getByAltText } = render(<Header />);
    expect(getByText('iTunes Search')).toBeInTheDocument();
    expect(getByText('Search the iTunes library for your favourite media')).toBeInTheDocument();
    expect(getByAltText('itunes logo')).toBeInTheDocument();
  });
});
