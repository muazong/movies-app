import { useCallback } from "react";
import PropTypes from "prop-types";

import icons from "../../../../../assets/icons";
import "./Information.scss";

function Information({ detail }) {
  const calculateTime = useCallback((time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}min`;
  }, []);

  return (
    <div className="information-wrapper">
      <div className="genres">
        {detail.genres.map((genre) => {
          return (
            <p className="genre" key={genre.id}>
              {genre.name}
            </p>
          );
        })}
      </div>

      <h2 className="title">{`${detail.original_title} - ${detail.tagline}`}</h2>
      <p className="overview">{detail.overview}</p>

      <div className="details">
        <p>
          <img src={icons.imdb_icon} className="icon" alt="" />
          IMDB ID: {detail.imdb_id.toUpperCase()}
        </p>
        <p>
          <img src={icons.calendar_icon} className="icon" alt="" />
          Release Date: {detail.release_date}
        </p>
        <p>
          <img src={icons.clock_icon} className="icon" alt="" />
          Time:&nbsp;
          {calculateTime(detail.runtime)}
        </p>
        <div className="rating">
          <p>
            <img src={icons.vote_average_icon} className="icon" alt="" />
            Vote Average: {detail.vote_average?.toFixed(1)}
            /10
          </p>
          <p>
            <img src={icons.vote_count_icon} className="icon" alt="" />
            Vote Count: {detail.vote_count}
          </p>
        </div>
        <p className="spoken-languages">
          <img src={icons.language_icon} className="icon" alt="" />
          Spoken Languages:&nbsp;
          {detail.spoken_languages.map((language, index, array) => {
            return (
              <span key={language.english_name}>
                {language.english_name +
                  (index === array.length - 1 ? "" : ", ")}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

Information.propTypes = {
  detail: PropTypes.any.isRequired,
};

export default Information;
