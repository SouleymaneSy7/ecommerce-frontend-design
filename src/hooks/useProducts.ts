import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

export const useProducts = (path: string) => {
  const { data, error, isLoading } = useSWR(path, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
};
