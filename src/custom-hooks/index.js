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

  const handleFetch = async () => {
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
  };

  useEffect(() => handleFetch, []);

  return movieData;
}

function useTrailerFetch(id) {
  const [trailerData, setTrailerData] = useState({});

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `${URL}movie/${id}/videos?language=en-US`,
        options,
      );
      const data = await response.json();
      setTrailerData(data.results[0]);
    } catch (error) {
      alert("Error fetching movies" + error);
    }
  };

  useEffect(() => handleFetch, []);

  return trailerData;
}

export { useMoviesFetch, useTrailerFetch };
