import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components.js/SearchResults";

test("renders without crashing", () => {
  const searchResults = [];
  const searchType = "musicArtist";
  const handleAddToFavourites = jest.fn();

  render(
    <SearchResults
      searchResults={searchResults}
      searchType={searchType}
      handleAddToFavourites={handleAddToFavourites}
    />
  );
});
