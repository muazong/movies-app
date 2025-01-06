import PropTypes from "prop-types";

import "./Video.scss";

function Video({ trailer, detail }) {
  const trailerIdx = Math.floor(Math.random() * trailer.results.length);

  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer.results[trailerIdx].key}`}
      title={`${detail.original_title} - ${detail.tagline}`}
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

Video.propTypes = {
  trailer: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,
};

export default Video;
