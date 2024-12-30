import MovieList from "../MovieList";
import Banner from "./Banner";

import "./HomeBody.scss";

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
