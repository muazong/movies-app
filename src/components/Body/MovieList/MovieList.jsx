import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../../custom-hooks";

import icons from "../../../assets/icons";
import "./MovieList.scss";
import { IMAGE_URL } from "../../../assets/tokens";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function MovieList({ category = "Up Coming", type = "upcoming" }) {
  const { movies } = useMovies(type);
  const navigate = useNavigate();

  return (
    <div className="movie-list-wrapper">
      <h1>{category}</h1>
      <Carousel responsive={responsive} className="movie-list">
        {movies
          ? movies.map((movie) => {
              return (
                <div
                  className="movie-list-item"
                  key={movie.id}
                  onClick={() => navigate(`/trailer/${movie.id}`)}
                >
                  <div className="item-img">
                    <div className="background"></div>
                    <img src={icons.play_icon} className="play-icon" alt="" />
                    <img
                      src={IMAGE_URL + movie.poster_path}
                      className="poster"
                      alt=""
                    />
                  </div>
                  <h3>{movie.original_title}</h3>
                </div>
              );
            })
          : ""}
      </Carousel>
    </div>
  );
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
