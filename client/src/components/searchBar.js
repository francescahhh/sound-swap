import React from 'react';

const  SearchBar = () => {
    return (
    <form action="/" method="get">
        <input
            type="text"
            id="search"
            placeholder="Search"
            name="s" 
        />
        <select name="selectList" id="selectList">
            <option value="option 1">Song Title</option>
            <option value="option 2">Album Name</option>
            <option value="option 3">Artist Name</option>
        </select>
        <button className="button" type="submit">Search</button>
    </form>
)
};

export default SearchBar;

