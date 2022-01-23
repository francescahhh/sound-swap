import './App.css';
// import { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import NewPlaylistButton from './components/newPlaylistButton';
import PlaylistContainer from './components/playlistContainer';
import UserLoginButton from './components/userLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Header />
      </header>
      <div>
        <NewPlaylistButton />
        <UserLoginButton />
        <SearchBar />
        <PlaylistContainer />
      </div>
   </div>
  );
}

export default App;
