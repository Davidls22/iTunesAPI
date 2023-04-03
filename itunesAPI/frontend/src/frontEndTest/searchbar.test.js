import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components.js/SearchBar';

describe('SearchBar', () => {
  const setTerm = jest.fn();
  const setEntity = jest.fn();
  const handleSearch = jest.fn();

  it('renders search bar correctly', () => {
    const { getByLabelText, getByText } = render(<SearchBar setTerm={setTerm} setEntity={setEntity} handleSearch={handleSearch} />);
    expect(getByLabelText('Search Term:')).toHaveValue('');
    expect(getByText('Media:')).toBeInTheDocument();
  });

  it('calls setTerm when search term input is changed', () => {
    const { getByLabelText } = render(<SearchBar setTerm={setTerm} setEntity={setEntity} handleSearch={handleSearch} />);
    const searchTermInput = getByLabelText('Search Term:');
    fireEvent.change(searchTermInput, { target: { value: 'New Term' } });
    expect(setTerm).toHaveBeenCalledWith('New Term');
  });

  it('calls setEntity when media dropdown is changed', () => {
    const { getByLabelText } = render(<SearchBar setTerm={setTerm} setEntity={setEntity} handleSearch={handleSearch} />);
    const mediaDropdown = getByLabelText('Media:');
    fireEvent.change(mediaDropdown, { target: { value: 'musicArtist' } });
    expect(setEntity).toHaveBeenCalledWith('musicArtist');
  });

  it('calls handleSearch when search button is clicked', () => {
    const { getByText } = render(<SearchBar setTerm={setTerm} setEntity={setEntity} handleSearch={handleSearch} />);
    const searchButton = getByText('Search');
    fireEvent.click(searchButton);
    expect(handleSearch).toHaveBeenCalled();
  });
});

/* sources:
https://testing-library.com/docs/react-testing-library/intro/
https://testing-library.com/docs/react-testing-library/api#render
https://testing-library.com/docs/dom-testing-library/api-events/
also mentor help to sort out some issues as quite complex
*/