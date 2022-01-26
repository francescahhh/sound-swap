import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [update, setUpdate] = useState(false);
  //   const [api, setApi] = useState(SongAPI);

  const deezer = `https://api.deezer.com/search?q=${search}&redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&index=25`;

  function handleSearch(e) {
    e.preventDefault();
    setUpdate(!update);
  }

  useEffect(() => {
    if (search == "") {
    } else {
      fetch(deezer)
        .then((res) => res.json())
        .then((songData) => setResults(songData.data));
    }
  }, [update]);
  console.log(results);
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
      <button className="button" type="submit">
        Search
      </button>
      <SongCard results={results} />
    </form>
  );
};

export default SearchBar;
