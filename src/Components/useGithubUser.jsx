import useSWR, { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function SWRProvider({ children }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}

export default function useGithubUser(username) {
  const shouldFetch = username !== null && username !== undefined;
  const { data, error, mutate } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null
  );

  return {
    user: data,
    isLoading: shouldFetch && !error && !data,
    isError: error,
    refetch: mutate,
  };
}
