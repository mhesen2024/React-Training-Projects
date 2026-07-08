import { useEffect, useState } from "react";

const key = "aa88bdf1";

export function useMovies(query ) {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        setError("");
        try {
          setLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal },
          );
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie not found");
          }
          setMovies(data.Search);
          setLoading(false);
        } catch (error) {
          if (error.message !== "AbortError") return;
          setError(error.message);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }
      if (query.length < 3) {
        setError("");
        setMovies([]);
        return;
      }
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query],
  );
  return { error, loading, movies };
}
