import { useEffect, useState } from "react";
import { API_KEY, URL } from "../assets/tokens";

function useMoviesFetch(type) {
  const [movieData, setMovieData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

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

export { useMoviesFetch };
