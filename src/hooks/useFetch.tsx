import React from "react";
import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  const request = React.useCallback(async (url: string, options?: any) => {
    let response;

    try {
      setError(null);
      setLoading(true);
      response = await axios.get(url, options);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setData(response);
      setLoading(false);
      return { response };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
