import PropTypes from "prop-types";

import { IMAGE_URL } from "../../../assets/tokens";
import images from "../../../assets/images";

import "./TrailerCredit.scss";

function TrailerCredit({ credit }) {
  console.log(credit);
  return (
    <div className="trailer-credit">
      <h1>Casting</h1>
      <div className="casting-container">
        <ul className="casting-list">
          {credit.cast?.map((casting) => {
            return (
              <li className="casting" key={casting.id}>
                <img
                  src={
                    casting.profile_path
                      ? IMAGE_URL + casting.profile_path
                      : images.user
                  }
                  className="casting-avatar"
                  alt=""
                />
                <p className="casting-name">{casting.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="crew-container"></div>
    </div>
  );
}

TrailerCredit.propTypes = {
  credit: PropTypes.object.isRequired,
};

export default TrailerCredit;
