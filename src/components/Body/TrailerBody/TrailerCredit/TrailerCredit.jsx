import PropTypes from "prop-types";
import { useTrailer } from "../../../../custom-hooks";

import "./TrailerCredit.scss";

import PersonInformation from "./PersonInformation";

function TrailerCredit({ trailerId }) {
  const { credit } = useTrailer(trailerId);

  return credit ? (
    <div className="trailer-credit">
      <PersonInformation credit={credit} title="cast" />
      <PersonInformation credit={credit} title="crew" />
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
}

TrailerCredit.propTypes = {
  trailerId: PropTypes.string,
};

export default TrailerCredit;
