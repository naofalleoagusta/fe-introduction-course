import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export default useFetch;
