import PropTypes from "prop-types";
import { useTrailer } from "../../../../custom-hooks";

import "./TrailerVideo.scss";

import Video from "./Video";
import Information from "./Information";
import Sales from "./Sales";
import Production from "./Production";

function TrailerVideo({ trailerId }) {
  const { trailer, detail } = useTrailer(trailerId);

  return trailer && detail ? (
    <div className="trailer-video-wrapper">
      <Video trailer={trailer} detail={detail} />

      <div className="trailer-info">
        <Information detail={detail} />
        <Sales detail={detail} />
        <Production detail={detail} />
      </div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
}

TrailerVideo.propTypes = {
  trailerId: PropTypes.string.isRequired,
};

export default TrailerVideo;
