import React from "react";
import logo from "../ituneslogo.png";

function SearchResults({ searchResults, searchType, handleAddToFavourites }) {
  return (
    <div className="searchresults">
      {/* if user searches then search results will be shown */}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.trackId}>
              <div className="result-info">
                {/* will show the name of the result, either track name or name of collection depending on media chosen */}
                <h3>
                  {searchType === "musicArtist"
                    ? result.artistName
                    : result.trackName || result.collectionName}
                </h3>
                {searchType !== "musicArtist" && <p>by {result.artistName}</p>}
              </div>
              <div className="result-image">
                {/* shows the correct image for the item searched for - if they choose artist then set img is
                added as it is not in API */}
                {searchType === "musicArtist" ? (
                  <div className="result-image">
                    <img src={logo} alt="iTunes logo" />
                    </div>
                ) : (
                  <div className="result-image">
                    <img
                      src={result.artworkUrl100}
                      alt={result.trackName || result.collectionName}
                    />
                  </div>
                )}
              </div>
              {/* onclick event handler to add items to favourites list*/}
              <button onClick={() => handleAddToFavourites(result)}>
                Add to Favourites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
