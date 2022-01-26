import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [update, setUpdate] = useState(false);

  const deezer = `https://api.deezer.com/search?q=${search}&redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&index=25
  `;

  function handleSearch(e) {
    e.preventDefault();
    setUpdate(!update);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    function handleSubmit(e) {
      e.preventDefault();

      const userCreds = { ...formData };

      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCreds),
      })
        .then((r) => r.json())
        .then((user) => {
          console.log(user);
          setFormData({
            username: "",
            password: "",
          });
        });
    }
  }

  useEffect(() => {
    if (search == "") {
    } else {
      fetch(deezer)
        .then((res) => res.json())
        .then((songData) => setResults(songData.data));
    }
  }, [update]);
  // console.log(results);
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
