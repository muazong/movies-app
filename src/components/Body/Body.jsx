import PropTypes from "prop-types";

import "./Body.scss";
import HomeBody from "./HomeBody";
import PopularBody from "./PopularBody";
import TvShowsBody from "./TvShowsBody/TvShows";
import AboutBody from "./AboutBody";

function Body({ page = "home" }) {
  const HandleBodyContent = () => {
    if (page === "home") {
      return <HomeBody />;
    }

    if (page === "popular") {
      return <PopularBody />;
    }

    if (page === "tv_shows") {
      return <TvShowsBody />;
    }

    if (page === "about") {
      return <AboutBody />;
    }
  };

  return (
    <div className="wrapper">
      <HandleBodyContent />
    </div>
  );
}

Body.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Body;
