import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTrailerFetch } from "../../custom-hooks";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./Trailer.scss";
import icons from "../../assets/icons";
import { IMAGE_URL } from "../../assets/tokens";

function calculateTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}min`;
}

function Trailer() {
  const { trailerId } = useParams();
  const { videoData, detailData, creditData } = useTrailerFetch(trailerId);
  console.log(creditData);

  const formattedNumber = (number) => {
    const result = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);

    return result;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return videoData && detailData && creditData ? (
    <>
      <Header />
      <div className="trailer">
        <div className="trailer-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoData.key}`}
            title={`${detailData.original_title} - ${detailData.tagline}`}
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="trailer-info">
            <div className="movie-info">
              <div className="genres">
                {detailData.genres?.map((genre) => {
                  return (
                    <p className="genre" key={genre.id}>
                      {genre.name}
                    </p>
                  );
                })}
              </div>
              <h2 className="title">{`${detailData.original_title} - ${detailData.tagline}`}</h2>
              <p className="overview">{detailData.overview}</p>

              <div className="details">
                <p>
                  <img src={icons.imdb_icon} className="icon" alt="" />
                  IMDB ID: {detailData.imdb_id?.toUpperCase()}
                </p>
                <p>
                  <img src={icons.calendar_icon} className="icon" alt="" />
                  Release Date: {detailData.release_date}
                </p>
                <p>
                  <img src={icons.clock_icon} className="icon" alt="" />
                  Time:&nbsp;
                  {calculateTime(detailData.runtime)}
                </p>
                <div className="rating">
                  <p>
                    <img
                      src={icons.vote_average_icon}
                      className="icon"
                      alt=""
                    />
                    Vote Average: {detailData.vote_average?.toFixed(1)}
                    /10
                  </p>
                  <p>
                    <img src={icons.vote_count_icon} className="icon" alt="" />
                    Vote Count: {detailData.vote_count}
                  </p>
                </div>
                <p className="spoken-languages">
                  <img src={icons.language_icon} className="icon" alt="" />
                  Spoken Languages:&nbsp;
                  {detailData.spoken_languages?.map(
                    (language, index, array) => {
                      return (
                        <span key={language.english_name}>
                          {language.english_name +
                            (index === array.length - 1 ? "" : ", ")}
                        </span>
                      );
                    },
                  )}
                </p>
              </div>
            </div>
            <div className="sales">
              <p className="budget">
                <img src={icons.budget_icon} className="icon" alt="" />
                Budget: {formattedNumber(detailData.budget)}
              </p>
              <p className="revenue">
                <img src={icons.revenue_icon} className="icon" alt="" />
                Revenue: {formattedNumber(detailData.revenue)}
              </p>
            </div>
            <div className="production">
              <div className="companies">
                <p>Companies: </p>
                {detailData.production_companies?.map(
                  (company, index, array) => {
                    return (
                      <span key={company.id}>
                        {company.name +
                          (index === array.length - 1 ? "" : ", ")}
                      </span>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="trailer-credits">
          <div className="cast">
            {creditData.cast?.map((casting) => {
              return (
                <div className="cast-list" key={casting.cast_id}>
                  <img
                    src={IMAGE_URL + casting.profile_path}
                    className="casting-avatar"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="crew"></div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    ""
  );
}

export default Trailer;
