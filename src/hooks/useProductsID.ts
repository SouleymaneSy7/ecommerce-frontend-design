import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

const JSONExtension = ".json";

export function useProductId(_path: string, id: string | number) {
  const { data, error, isLoading } = useSWR(
    _path && id ? `${_path}${id}${JSONExtension}` : null,
    fetcher
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
}
