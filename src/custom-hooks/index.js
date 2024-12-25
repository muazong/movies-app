/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { API_KEY, URL } from "../assets/tokens";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function useMoviesFetch(type) {
  const [movieData, setMovieData] = useState([]);

  useEffect(
    () => async () => {
      try {
        const response = await fetch(
          `${URL}movie/${type}?language=en-US&page=1`,
          options,
        );
        const data = await response.json();
        setMovieData(data.results);
      } catch (error) {
        alert("Error fetching movies" + error);
      }
    },
    [],
  );

  return movieData;
}

function useTrailerFetch(id) {
  const [videoData, setVideoData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [creditData, setCreditData] = useState([]);

  useEffect(
    () => async () => {
      const video_url = `${URL}${id}/videos?language=en-US`;
      const detail_url = `${URL}${id}?language=en-US`;
      const credit_url = `${URL}${id}/credits?language=en-US`;

      const [video, detail, credit] = await Promise.all([
        fetch(video_url, options),
        fetch(detail_url, options),
        fetch(credit_url, options),
      ]);

      const videoData = await video.json();
      const detailData = await detail.json();
      const creditData = await credit.json();

      setVideoData(videoData.results[0]);
      setDetailData(detailData);
      setCreditData(creditData);
    },
    [],
  );

  return { videoData, detailData, creditData };
}

export { useMoviesFetch, useTrailerFetch };
