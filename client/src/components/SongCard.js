import React from "react";

function SongCard({ results }) {
  const mapResults = results.map((song) => {
    console.log(song);
    return (
      <div className="song_container_card">
        <div>{song.name}</div>
        <img src={song.image[2]} />
      </div>
    );
  });

  return <div>{mapResults}</div>;
}

export default SongCard;
