import { useNavigate } from "react-router-dom";
import { useMovies } from "../../../../custom-hooks";
import PropTypes from "prop-types";

import icons from "../../../../assets/icons";
import { IMAGE_URL } from "../../../../assets/tokens";

import "./Banner.scss";

function Banner({ type = "upcoming" }) {
  const { movies, isLoading } = useMovies(type);
  const navigate = useNavigate();

  return movies[0] && !isLoading ? (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${IMAGE_URL}${movies[0].backdrop_path})`,
      }}
    >
      <div className="background"></div>
      <div className="info">
        <div className="text">
          <h1>{movies[0].original_title}</h1>
          <p>{movies[0].overview}</p>
        </div>
        <button onClick={() => navigate(`/trailer/${movies[0].id}`)}>
          Watch Now
        </button>
      </div>
      <div
        className="movie-image"
        onClick={() => navigate(`/trailer/${movies[0].id}`)}
      >
        <img src={icons.play_icon} className="play-icon" alt="" />
        <img
          src={IMAGE_URL + movies[0].poster_path}
          className="poster"
          alt=""
        />
      </div>
    </div>
  ) : (
    <div style={{ height: "600px" }}></div>
  );
}

Banner.propTypes = {
  type: PropTypes.string,
};

export default Banner;
