import { useEffect, useState, useCallback } from "react";
import { API_KEY, URL } from "../assets/tokens";

const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function useMovies(type) {
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `${URL}${type}?language=en-US&page=1`,
        fetchOptions,
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      throw new Error(error);
    }
  }, [type]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { movies };
}

function useTrailer(id) {
  const [data, setData] = useState({});

  const fetchData = useCallback(async () => {
    const trailer_url = `${URL}${id}/videos?language=en-US`;
    const detail_url = `${URL}${id}?language=en-US`;
    const credit_url = `${URL}${id}/credits?language=en-US`;

    try {
      const [trailer, detail, credit] = await Promise.all([
        fetch(trailer_url, fetchOptions),
        fetch(detail_url, fetchOptions),
        fetch(credit_url, fetchOptions),
      ]);

      const trailer_data = await trailer.json();
      const detail_data = await detail.json();
      const credit_data = await credit.json();

      setData({
        trailer: trailer_data,
        detail: detail_data,
        credit: credit_data,
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { trailer, detail, credit } = data;
  return { trailer, detail, credit };
}
export { useMovies, useTrailer };
