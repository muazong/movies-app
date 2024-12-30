import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTrailer } from "../../custom-hooks";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./Trailer.scss";
import TrailerVideoInfo from "./components/TrailerVideoInfo";
import TrailerCredit from "./components/TrailerCredit";

function Trailer() {
  const { trailerId } = useParams();
  const { trailer, detail, credit } = useTrailer(trailerId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="trailer">
        <TrailerVideoInfo trailer={trailer} detail={detail} />
        <TrailerCredit credit={credit} />
      </div>
      <Footer />
    </>
  );
}

export default Trailer;
