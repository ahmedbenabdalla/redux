import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie } from "../JS-Redux/Actions/actions";
import ModalMovie from "./ModalMovie";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div id="card">
      <Rating Rating={movie.Rating} />
      <h2>{movie.Title}</h2>
      <Link to={`/movie/${movie.Title}`}>
        <img
          src={movie.Image}
          alt="movie-image"
          style={{ width: "310px", height: "350px" }}
        />
      </Link>
      <h3>{movie.Date}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(deleteMovie(movie.id))} id="btn">
          Delete
        </button>
        <ModalMovie btnName="Update" movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
