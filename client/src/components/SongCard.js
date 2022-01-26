import React from "react";

function SongCard({ results }) {
  const convertHMS = (value) => {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    console.log(hours + ":" + minutes + ":" + seconds);
    return minutes + ":" + seconds; // Return is HH : MM : SS
  };

  const mapResults = results.map((song) => {
    console.log(song);
    return (
      <div className="song_container_card">
        <h1>{song.title}</h1>
        <img src={song.album.cover} />
        <div>{song.artist.name}</div>
        <div>{convertHMS(song.duration)}</div>
        <button>Add to Playlist</button>
      </div>
    );
  });

  return <div>{mapResults}</div>;
}

export default SongCard;
