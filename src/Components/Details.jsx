import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Details = (props) => {
  const state = useSelector((state) => state);
  let movie = state.Data.find((m) => m.Title === props.match.params.Title);

  return (
    <div>
      <MovieCard movie={movie}></MovieCard>
    </div>
  );
};

export default Details;
