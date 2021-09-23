import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard";

const Movies = () => {
  return (
    <div className="movie">
      {data.map((movie, i) => (
        <MovieCard movie={movie} key={i} />
      ))}
    </div>
  );
};

export default Movies;
