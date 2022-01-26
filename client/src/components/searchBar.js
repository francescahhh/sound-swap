import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("a");
  const [results, setResults] = useState({});

  const API = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=e267a8c03a71d8001735092761c5637b&format=json`;
  const artistAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${search}&api_key=e267a8c03a71d8001735092761c5637b&format=json`;
  const albumAPI = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=e267a8c03a71d8001735092761c5637b&format=json`;

  function handleSearch(e) {
    e.preventDefault();
    fetch(API)
      .then((res) => res.json())
      .then((songData) => console.log(songData));
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        name="s"
        onChange={handleChange}
      />
      <select name="selectList" id="selectList">
        <option value="option 1">Song Title</option>
        <option value="option 2">Album Name</option>
        <option value="option 3">Artist Name</option>
      </select>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
