import { useState, useEffect } from "react";

interface useFetchProps<T> {
  loading: boolean;
  error?: string | null;
  data: T | null;
}

const useFetch = <T,>(url: string): useFetchProps<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error 404. Failed retrieving data from url.");
        }
        return res.json();
      })
      .then((data: T) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;
