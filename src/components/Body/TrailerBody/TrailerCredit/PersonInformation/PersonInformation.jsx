import PropTypes from "prop-types";

import "./PersonInformation.scss";

import { IMAGE_URL } from "../../../../../assets/tokens";
import images from "../../../../../assets/images";

function PersonInformation({ credit, title }) {
  return (
    <>
      <h1>{title.slice(0, 1).toUpperCase() + title.slice(1)}</h1>
      <div className="person-wrapper">
        <ul className="person-list">
          {credit[title].map((person, index) => {
            return (
              <li className="person" key={index}>
                <img
                  src={
                    person.profile_path
                      ? IMAGE_URL + person.profile_path
                      : images.user
                  }
                  className="avatar"
                  alt=""
                />
                <p className="name">{person.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

PersonInformation.propTypes = {
  credit: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default PersonInformation;
