import React from "react";
import logo from "../ituneslogo.png";

function Favourites({ favourites, handleRemoveFavourite }) {
  return (
    <div>
      {/* displays favourites if item added*/}
      {favourites.length > 0 && (
        <div className="favourites-container">
          <hr></hr>
          <h2>Favourites</h2>
          <ul className="favourites">
            {/* maps displays favourites item similarly to search results*/}
            {favourites.map((favourite) => (
              <li key={favourite.trackId}>
                <div className="favourite-details">
                  <div className="favourite-title">
                    <h3>{favourite.trackName || favourite.collectionName}</h3>
                    <p> by {favourite.artistName}</p>
                  </div>
                  <div className="favourite-image">
                    {/* Display artwork for favourites or stock image if not available */}
                    {favourite.artworkUrl100 ? (
                      <img
                        src={favourite.artworkUrl100}
                        alt={favourite.trackName || favourite.collectionName}
                      />
                    ) : (
                      <img src={logo} alt="iTunes logo" />
                    )}
                  </div>
                </div>
                {/* button to remove favourite*/}
                <button onClick={() => handleRemoveFavourite(favourite)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Favourites;
