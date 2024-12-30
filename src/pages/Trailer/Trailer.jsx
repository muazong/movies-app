import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTrailer } from "../../custom-hooks";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./Trailer.scss";
import TrailerCredit from "./TrailerCredit";
import TrailerVideo from "./TrailerVideo";

function Trailer() {
  const { trailerId } = useParams();
  const { trailer, detail, credit } = useTrailer(trailerId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="trailer-wrapper">
        <TrailerVideo trailer={trailer} detail={detail} />
        <TrailerCredit credit={credit} />
      </div>
      <Footer />
    </>
  );
}

export default Trailer;
