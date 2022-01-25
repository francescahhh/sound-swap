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
        <button className="button" type="submit">Search</button>
    </form>
)
};

export default SearchBar;


//Need to add a dropdown menu to filter through the search results--does that need to be built out into a separate component (to make sure that each component is only in charge of one thing) and then combine this + the dropdown into a larger container component