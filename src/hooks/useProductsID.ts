import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

const JSONExtension = "?format=json";

export function useProductId(id: string | number, _path: string) {
  console.log("useProducts", `${_path}${id}${JSONExtension}`);

  const { data, error, isLoading } = useSWR(
    id ? `${_path}${id}${JSONExtension}` : null,
    fetcher
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
}
