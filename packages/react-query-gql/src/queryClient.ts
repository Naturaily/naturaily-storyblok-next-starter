import { QueryClient } from '@tanstack/react-query';

/* This code is creating a new instance of the `QueryClient` class from the `react-query` library. The
`QueryClient` is a central object that manages caching, fetching, and updating data for queries made
with `react-query`. */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
