import PropTypes from "prop-types";
import icons from "../../../assets/icons";
import "./TrailerVideo.scss";

function calculateTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}min`;
}

function formattedNumber(number) {
  const result = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return result;
}

function TrailerVideo({ trailer, detail }) {
  return trailer.results && detail ? (
    <div className="trailer-video">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
        title={`${detail.original_title} - ${detail.tagline}`}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="trailer-info">
        <div className="movie-info">
          <div className="genres">
            {detail.genres?.map((genre) => {
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
              IMDB ID: {detail.imdb_id?.toUpperCase()}
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
              {detail.spoken_languages?.map((language, index, array) => {
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
        <div className="sales">
          <p className="budget">
            <img src={icons.budget_icon} className="icon" alt="" />
            Budget: {formattedNumber(detail.budget)}
          </p>
          <p className="revenue">
            <img src={icons.revenue_icon} className="icon" alt="" />
            Revenue: {formattedNumber(detail.revenue)}
          </p>
        </div>
        <div className="production">
          <div className="companies">
            <p>Companies: </p>
            {detail.production_companies?.map((company, index, array) => {
              return (
                <span key={company.id}>
                  {company.name + (index === array.length - 1 ? "" : ", ")}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

TrailerVideo.propTypes = {
  trailer: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,
};

export default TrailerVideo;
