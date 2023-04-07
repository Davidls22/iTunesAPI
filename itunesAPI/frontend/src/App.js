import React, { useState } from 'react';
import './App.css'
import Header from './components.js/Header'
import SearchBar from './components.js/SearchBar';
import SearchResults from './components.js/SearchResults';
import Favourites from './components.js/Favourites'

function App() {
  // initialize states for search terms and API parameters
  const [term, setTerm] = useState('');
  const [entity, setEntity] = useState(' ');
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchType, setSearchType] = useState("");

  // handle the search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // use fetch to query the iTunes API with the specified entity and term parameters
      //const response = await fetch(`http://localhost:8081/api/search/${entity}/${term}`);
      const response = await fetch(`https://itunesapi.onrender.com/api/search/${entity}/${term}`);
      const data = await response.json();
      // update search results and search type state variables with the fetched data
      setSearchResults(data.results);
      setSearchType(entity);
    } catch (error) {
      console.error(error);
    }
  };

  // handle adding items to favourites
  const handleAddToFavourites = (result) => {
    // check if an item with the same details already exists in favourites
    const isDuplicate = favourites.some((favourite) => JSON.stringify(favourite) === JSON.stringify(result));
    // if not, add the item to favourites state
    if (!isDuplicate) {
      setFavourites([...favourites, result]);
    }
  };

  // handle removing items from favourites
  const handleRemoveFavourite = (itemToRemove) => {
    // filter out the item that matches the item to remove, based on their JSON string representation
    const updatedFavourites = favourites.filter((favourite) => JSON.stringify(favourite) !== JSON.stringify(itemToRemove));
    setFavourites(() => updatedFavourites);
  };

  return (
    <div>
      <Header />
      <SearchBar term={term} setTerm={setTerm} entity={entity} setEntity={setEntity} handleSearch={handleSearch} />
      <SearchResults searchResults={searchResults} searchType={searchType} handleAddToFavourites={handleAddToFavourites} />
      <Favourites favourites={favourites} handleRemoveFavourite={handleRemoveFavourite}/>
    </div>
  );
}

export default App;

//sources:
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://codesandbox.io/s/itunes-api-with-react-6v1z7o0v43
//https://codesandbox.io/s/t2t16
//https://codesandbox.io/s/jjwjqzl3wy
