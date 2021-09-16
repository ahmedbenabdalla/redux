import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../JS-Redux/Actions/actions";
import Rating from "./Rating";

const Header = () => {
  const [rating, setRating] = useState(0);
  const [title, setInput] = useState("");
  const dispatch = useDispatch();
  const handleRating = (i) => {
    setRating(i);
    return dispatch(searchMovies(title, rating));
  };
  const handleInput = (e) => {
    setInput(e.target.value);
    return dispatch(searchMovies(title, rating));
  };

  useEffect(() => {
    dispatch(searchMovies(title, rating));
  }, [rating, title]);

  return (
    <div id="header">
      <h1>Our Movie App!!!</h1>
      <div>
        <input type="text" value={title} onChange={handleInput} />
        <Rating handleRating={handleRating} Rating={rating} />
      </div>
    </div>
  );
};

export default Header;
