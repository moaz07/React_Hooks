import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <MovieCard
            posterURL={movie.PosterURL}
            title={movie.Title}
            rating={movie.Rating}
            description={movie.Description}
          />
        </div>
      ))}
    </>
  );
}
