import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => (
        <div key={i}>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
