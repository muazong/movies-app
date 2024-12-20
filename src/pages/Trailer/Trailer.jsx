import { useParams } from "react-router-dom";
import { useTrailerFetch } from "../../custom-hooks";

import "./Trailer.scss";

function Trailer() {
  const { trailerId } = useParams();
  const trailerData = useTrailerFetch(trailerId);
  console.log(trailerId);

  return (
    <div className="trailer">
      <iframe
        src={`https://www.youtube.com/embed/${trailerData?.key}`}
        title={trailerData?.name}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Trailer;
