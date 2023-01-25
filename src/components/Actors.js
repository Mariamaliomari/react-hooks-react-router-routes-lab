import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor) => {
        return (
          <div key={actor.name}>
            <h2>{actor.name}</h2>
            <li>{actor.movies}</li>
          </div>
        );
      })}
    </div>
  );
}



export default Actors;
