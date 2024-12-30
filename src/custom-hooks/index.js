import { useEffect, useMemo, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useMemo(async () => {
    try {
      const response = await fetch(
        `${URL}${type}?language=en-US&page=1`,
        fetchOptions,
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error);
    }
  }, [type]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      try {
        fetchData();
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAsync();
  }, [fetchData]);

  return { movies, isLoading, error };
}

function useTrailer(id) {
  const [data, setData] = useState({
    trailer: [],
    detail: [],
    credit: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useMemo(async () => {
    const trailer_url = `${URL}${id}/videos?language=en-US`;
    const detail_url = `${URL}${id}?language=en-US`;
    const credit_url = `${URL}${id}/credits?language=en-US`;

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
  }, [id]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        setIsLoading(true);
        fetchData();
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAsync();
  }, [fetchData]);

  return { ...data, isLoading, error };
}

export { useMovies, useTrailer };
