// import "./Loggedin.css";
import { useState, useEffect } from "react";
// import Header from "./header";
import SearchBar from "./searchBar";
import NewPlaylistButton from "./newPlaylistButton";
import PlaylistContainer from "./playlistContainer";
import UserDisplay from "./userDisplay";

function LoggedIn({ currentUser, setCurrentUser }) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Header />
      </header> */}
      <div>
        <NewPlaylistButton />
        <UserDisplay setCurrentUser={setCurrentUser} />
        <SearchBar />
        <PlaylistContainer />
      </div>
    </div>
  );
}

export default LoggedIn;
