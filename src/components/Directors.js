import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directors.map((director) => {
          return (
            <div key={director.name}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie) => {
                  return <li key={movie}>{movie}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Directors;
