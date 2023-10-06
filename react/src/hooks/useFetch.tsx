import { useState, useEffect } from "react";

interface useFetchProps<T> {
  loading: boolean;
  error?: string | null;
  data: T;
}

const useFetch = <T,>(url: string, initialState: T): useFetchProps<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>(initialState);
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
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
