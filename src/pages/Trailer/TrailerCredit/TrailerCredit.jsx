import PropTypes from "prop-types";
import { IMAGE_URL } from "../../../assets/tokens";

function TrailerCredit({ credit }) {
  return (
    <div className="trailer-credits">
      <div className="cast">
        {credit.cast?.map((casting) => {
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
  );
}

TrailerCredit.propTypes = {
  credit: PropTypes.object.isRequired,
};

export default TrailerCredit;
