import { useParams } from "react-router-dom";
import { useTrailerFetch } from "../../custom-hooks";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./Trailer.scss";

function Trailer() {
  const { trailerId } = useParams();
  const { videoData, detailData } = useTrailerFetch(trailerId);
  console.log(detailData);

  return (
    <>
      <Header />
      <div className="trailer">
        <iframe
          src={`https://www.youtube.com/embed/${videoData?.key}`}
          title={`${detailData?.original_title} - ${detailData?.tagline}`}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Trailer;
