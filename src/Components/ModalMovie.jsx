import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./Style/Style.css";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addMovie, updateMovie } from "../JS-Redux/Actions/actions";
const ModalMovie = ({ movie, btnName }) => {
  console.log(movie);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(movie.Image);
  const [rating, setRating] = useState(movie.Rating);
  const [date, setDate] = useState(movie.Date);
  const [title, setTitle] = useState(movie.Title);

  const handleClose = () => {
    if (movie.id == "") {
      const newMovie = {
        id: Math.random(),
        Title: title,
        Image: image,
        Rating: rating,
        Date: date,
      };
      dispatch(addMovie(newMovie));
    } else if (movie.id != "") {
      const updatedMovie = {
        id: movie.id,
        Title: title,
        Image: image,
        Rating: rating,
        Date: date,
      };
      console.log(updatedMovie);
      dispatch(updateMovie(updatedMovie));
    }
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const handleRating = (i) => {
    setRating(i);
  };

  return (
    <>
      <Button id="btn" variant="primary" onClick={handleShow}>
        {btnName}
      </Button>
      :
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title> Movie</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
            <h6>Movie Name:</h6>
            <input
              style={{ width: "100%" }}
              type="Text"
              value={title}
              placeholder="movie name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <h6>Rating:</h6>
            <Rating
              style={{ width: "100%" }}
              handleRating={handleRating}
              Rating={rating}
            />
            <h6>Image:</h6>
            <input
              style={{ width: "100%" }}
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <h6>Date:</h6>
            <input
              style={{ width: "100%" }}
              type="Date"
              placeholder="url image"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
ModalMovie.defaultProps = {
  movie: { id: "", Title: "", Image: "", Rating: "", Date: "" },
};
export default ModalMovie;
