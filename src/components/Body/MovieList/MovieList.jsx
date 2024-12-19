import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMoviesFetch } from "../../../custom-hooks";

import icons from "../../../assets/icons";
import "./MovieList.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
  const movieData = useMoviesFetch(type);
  const img_url = "https://image.tmdb.org/t/p/w500/";
  console.log(movieData);

  return (
    <div className="movie-list-wrapper">
      <h1>{category}</h1>

      <Carousel responsive={responsive} className="movie-list">
        {movieData.map((movie) => {
          return (
            <div className="movie-list-item" key={movie.id}>
              <div className="item-img">
                <div className="background"></div>
                <img src={icons.play_icon} className="play-icon" alt="" />
                <img
                  src={img_url + movie.poster_path}
                  className="poster"
                  alt=""
                />
              </div>
              <h3>{movie.original_title}</h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;