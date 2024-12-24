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

  useEffect(
    () => async () => {
      const video_url = `${URL}movie/${id}/videos?language=en-US`;
      const detail_url = `${URL}movie/${id}?language=en-US`;

      const [video, detail] = await Promise.all([
        fetch(video_url, options),
        fetch(detail_url, options),
      ]);

      const videoData = await video.json();
      const detailData = await detail.json();

      setVideoData(videoData.results[0]);
      setDetailData(detailData);
    },
    [],
  );

  return { videoData, detailData };
}

export { useMoviesFetch, useTrailerFetch };
