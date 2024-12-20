import { useMoviesFetch } from "../../../custom-hooks";

import icons from "../../../assets/icons";
import { IMAGE_URL } from "../../../assets/tokens";

import MovieList from "../MovieList";

import "./HomeBody.scss";

function Banner() {
  const bannerData = useMoviesFetch("upcoming")[0];
  const handleClick = (id) => {
    window.location.href = `/trailer/${id}`;
  };

  return bannerData ? (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${IMAGE_URL}${bannerData?.backdrop_path})`,
      }}
    >
      <div className="background"></div>
      <div className="info">
        <div className="text">
          <h1>{bannerData?.original_title}</h1>
          <p>{bannerData?.overview}</p>
        </div>
        <button onClick={() => handleClick(bannerData.id)}>Watch Now</button>
      </div>
      <div className="movie-image" onClick={() => handleClick(bannerData.id)}>
        <img src={icons.play_icon} className="play-icon" alt="" />
        <img
          src={IMAGE_URL + bannerData?.poster_path}
          className="poster"
          alt=""
        />
      </div>
    </div>
  ) : (
    ""
  );
}

function HomeBody() {
  return (
    <div className="home-body">
      <Banner />
      <MovieList category="Up Coming" type="upcoming" />
      <MovieList category="Top Rated" type="top_rated" />
      <MovieList category="Now Playing" type="now_playing" />
      <MovieList category="Popular" type="popular" />
    </div>
  );
}

export default HomeBody;
