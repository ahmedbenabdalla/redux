import React from "react";
import { useSelector } from "react-redux";
import ModalMovie from "./ModalMovie";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const Data = useSelector((state) => state.Data);
  console.log(Data);
  return (
    <div>
      <div className="list-movies">
        {Data.map((m) => (
          <MovieCard movie={m} key={m.id}></MovieCard>
        ))}
      </div>
      <div id="btn-fixed">
        <ModalMovie btnName="Add Movie" />
      </div>
    </div>
  );
};

export default MovieList;
