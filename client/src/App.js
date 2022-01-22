import './App.css';
// import { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import NewPlaylistButton from './components/newPlaylistButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Header />
      </header>
      <div>
        <SearchBar />
        <NewPlaylistButton />
      </div>
   </div>
  );
}

export default App;
