import React from 'react'

function SearchBar({ term, setTerm, entity, setEntity, handleSearch }) {
    return (
      <form onSubmit={handleSearch}>
        <label>
          Search Term:
          {/* sets value for term search to what user wants to find*/}
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        </label>
        <label>
        Media:
          {/* dropdown select of all values for API*/}
          <select value={entity} onChange={(e) => setEntity(e.target.value)}>
            <option value=" ">All</option>
            <option value="movie">Movie</option>
            <option value="tvSeason">TV Show</option>
            <option value="song">Song</option>
            <option value="album">Album</option>
            <option value="musicArtist">Music Artist</option>
            <option value="ebook">eBook</option>
            <option value="audiobook">Audio Book</option>
            <option value="podcast">Podcast</option>
            <option value="software">Software</option>
            {/* no option for Short Film as the API is no longer supporting that - checked to make sure*/}
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }

  export default SearchBar