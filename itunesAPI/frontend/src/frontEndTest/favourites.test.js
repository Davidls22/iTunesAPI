import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Favourites from '../components.js/Favourites';

describe('Favourites', () => {
  const favourites = [
    { trackId: 1, trackName: 'Song 1', artistName: 'Artist 1', artworkUrl100: 'http://image.com' },
    { trackId: 2, trackName: 'Song 2', artistName: 'Artist 2', artworkUrl100: 'http://image.com' },
  ];
  const handleRemoveFavourite = jest.fn();

  it('renders favourites correctly', () => {
    const { getByText, getAllByRole } = render(<Favourites favourites={favourites} handleRemoveFavourite={handleRemoveFavourite} />);
    expect(getByText('Favourites')).toBeInTheDocument();
    expect(getAllByRole('listitem').length).toEqual(favourites.length);
  });

  it('removes favourite when remove button is clicked', () => {
    const { getAllByText } = render(<Favourites favourites={favourites} handleRemoveFavourite={handleRemoveFavourite} />);
    const removeButtons = getAllByText('Remove');
    fireEvent.click(removeButtons[0]);
    expect(handleRemoveFavourite).toHaveBeenCalledWith(favourites[0].trackId);
  });
});

/* sources:
https://testing-library.com/docs/react-testing-library/intro/
https://testing-library.com/docs/react-testing-library/api#render
https://testing-library.com/docs/dom-testing-library/api-events/
*/