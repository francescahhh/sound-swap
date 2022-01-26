// import "./Loggedin.css";
import { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import UserDisplay from "./userDisplay";

function LoggedIn({ currentUser, setCurrentUser }) {
  return (
    <div className="App">
      <div>
        <UserDisplay setCurrentUser={setCurrentUser} />
        <SearchBar />
      </div>
    </div>
  );
}

export default LoggedIn;
