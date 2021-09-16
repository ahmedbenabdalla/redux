import React from "react";

const Rating = ({ Rating, handleRating }) => {
  const rating = (x) => {
    let array = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        array.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "gold", fontSize: "25px" }}
          >
            {" "}
            ★
          </span>
        );
      } else {
        array.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "gray", fontSize: "25px" }}
          >
            {" "}
            ★
          </span>
        );
      }
    }

    return array;
  };

  return <div style={{ cursor: "pointer" }}>{rating(Rating)}</div>;
};
Rating.defaultProps = {
  handleRating: () => {},
};
export default Rating;
