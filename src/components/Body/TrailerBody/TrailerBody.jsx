import { useParams } from "react-router-dom";

import TrailerVideo from "./TrailerVideo";
import TrailerCredit from "./TrailerCredit";

import "./Trailer.scss";

function TrailerBody() {
  const { trailerId } = useParams();

  return (
    <>
      <div className="trailer-wrapper">
        <TrailerVideo trailerId={trailerId} />
        <TrailerCredit trailerId={trailerId} />
      </div>
    </>
  );
}

export default TrailerBody;
